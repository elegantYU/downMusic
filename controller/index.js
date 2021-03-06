const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const {
	getSongUrlXHR,
	getAllListSongXHR,
	getArtistInfoXHR,
	getArtistDescXHR,
	getLyricXHR,
	getSongStatusXHR,
	download,
} = require("../model");
const { getDatabaseListXHR } = require("../model/upload");
const { PLAYLIST } = require("../config");

const artistSet = new Set();

const getAllListSong = async () => {
	const fetchs = PLAYLIST.map((id) => getAllListSongXHR(id));
	console.log(chalk.cyanBright("正在请求歌单接口"));
	return Promise.all(fetchs).then((data) => {
		console.log(chalk.green("歌曲获取完毕"));
		const result = PLAYLIST.reduce((obj, id, i) => {
			const songs = data[i].songs.map((v) => {
				const { name, id, al, ar, mv, publishTime, h, m, l } = v;

				return {
					name,
					id,
					cover: al.picUrl,
					artists: ar.map((v) => ({ id: v.id, nickname: v.name })),
					album: { id: al.id, name: al.name, cover: al.picUrl },
					mv,
					publishTime,
				};
			});

			return { ...obj, [id]: songs };
		}, {});

		return result;
	});
};

const getDatabaseList = async () => {
	const {
		data: { data },
	} = await getDatabaseListXHR();

	return data.map((v) => v.id);
};

// 获取所有歌的歌词
const getLyric = async (list = []) => {
	console.log(chalk.cyanBright("开始获取所有歌词"));

	return Promise.all(list.map((v) => getLyricXHR(v.id))).then((data) => {
		console.log(chalk.green("歌词获取完毕"));
		const result = list.map((v, i) => {
			const {
				lrc: { lyric },
			} = data[i];

			return { ...v, lyric };
		});

		return result;
	});
};

// 获取所有歌手信息
const getArtistInfo = async (artists = []) => {
	console.log(chalk.cyanBright("开始获取歌手信息"));
	return Promise.all(artists.map((id) => getArtistInfoXHR(id))).then((data) => {
		console.log(chalk.green("歌手信息获取完毕"));
		if (!data.length) return [];
		const result = data.map(({ data: d }) => {
			const {
				artist: { id, name, cover },
			} = d;

			return {
				id,
				nickname: name,
				avatar: cover,
			};
		});

		return result;
	});
};

const getArtistDesc = async (artists = []) => {
	console.log(chalk.cyanBright("开始获取歌手生平经历"));
	return Promise.all(artists.map((v) => getArtistDescXHR(v.id))).then((data) => {
		const result = artists.map((v, i) => ({ ...v, introduction: data[i].introduction }));
		console.log(chalk.green("获取歌手生平经历完毕"));
		return result;
	});
};

const getSongUrl = async (list = []) => {
	console.log(chalk.cyanBright("开始请求歌曲链接"));
	const ids = list.map((v) => v.id);
	const sids = ids.join(",");
	return getSongUrlXHR(sids).then(({ data }) => {
		console.log(chalk.green("获取歌曲链接完毕"));
		const result = data
			.filter((v) => v.url)
			.map(({ url, size, br }, i) => ({
				...list[i],
				url: `/static/music/${ids[i]}`,
				originUrl: url,
				size,
				br,
			}));
		return result;
	});
};

const task = async () => {
	const listMap = await getAllListSong();
	const databaseList = await getDatabaseList();
	const playList = Object.values(listMap).map((l) =>
		l.filter((d) => {
			if (!databaseList.includes(d.id)) {
				d.artists.map((a) => artistSet.add(a.id));

				return d;
			}
		})
	);

	// 出歌曲
	const playListData = await Promise.all(playList.map((l) => getLyric(l)));

	// 获取歌曲链接并下载
	const playListWholeData = await Promise.all(playListData.map((l) => downloadSongs(l)));
	makeJsonFile(playListWholeData, "songsList");

	// 出歌手
	const artistInfoData = await getArtistInfo([...artistSet]);
	const artistWholeData = await getArtistDesc(artistInfoData);
	makeJsonFile(artistWholeData, "artists");
};

const downloadSongs = async (list) => {
	const songs = await getSongUrl(list);
	await Promise.all(songs.map((v) => download(v.originUrl, v.id)));

	return songs;
};

const makeJsonFile = (json, name) => {
	const str = JSON.stringify(json);
	const filePath = path.join(__dirname, `../output/${name}.json`);

	return new Promise((resolve) => {
		fs.writeFile(filePath, str, (err) => {
			if (err) return console.log(chalk.redBright(err));

			console.log(chalk.greenBright("文件创建成功"));
			resolve();
		});
	});
};

module.exports = {
	task,
};
