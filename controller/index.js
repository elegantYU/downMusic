import {
	getSongUrlXHR,
	getAllListSongXHR,
	getArtistInfoXHR,
	getArtistDescXHR,
	getLyricXHR,
	getSongStatusXHR,
	download,
} from "../model";
import { UID, COOKIE, PLAYLIST, DOWNLOADPATH } from "../config";
import chalk from "chalk";
import fs from "fs";

const getAllListSong = async () => {
	const fetchs = PLAYLIST.map((id) => getAllListSongXHR(id));
	console.log(chalk.cyanBright("正在请求歌单接口"));
	return Promise.all(fetchs).then((data) => {
		console.log(chalk.green("歌曲获取完毕"), data);
		const result = PLAYLIST.reduce((obj, id, i) => {
			const songs = data[i].songs.map((v) => {
				const { name, id, al, ar, mv, publishTime, h, m, l } = v;

				return {
					name,
					id,
					picUrl: al.picUrl,
					author: { id: ar.id, name: ar.name },
					album: { id: al.id, name: al.name, picUrl: al.picUrl },
					mv,
					publishTime,
				};
			});

			return { ...obj, [id]: songs };
		}, {});

		console.log("歌曲 format", result);
		return result;
	});
};

// 获取所有歌的歌词
const getLyric = async (list = []) => {
	console.log(chalk.cyanBright("开始获取所有歌词"));
	Promise.all(list.map((v) => getLyricXHR(v.id))).then((data) => {
		console.log(chalk.green("歌词获取完毕"), data);
		list.map((v, i) => {
			const {
				lrc: { lyric },
			} = data[i];

			return { ...v, lyric };
		});
	});
};

// 获取所有歌手信息
const getArtistInfo = async (artists = []) => {
	console.log(chalk.cyanBright("开始获取歌手信息"));
	Promise.all(artists.map((id) => getArtistInfoXHR(id))).then((data) => {
		console.log(chalk.green("歌手信息获取完毕"), data);
		const result = data.map((v) => {
			const {
				artist: { id },
				user: { backgroundUrl, birthday, signature, nickname, avatarUrl },
			} = v;

			return {
				id,
				nickname,
				avatar: avatarUrl,
				background: backgroundUrl,
				birthday,
				signature,
			};
		});

		return result;
	});
};

const getArtistDesc = async (artists = []) => {
	console.log(chalk.cyanBright("开始获取歌手生平经历"));
	return Promise.all(artists.map((v) => getArtistDescXHR(v.id))).then((data) => {
		console.log(chalk.green("获取歌手生平经历完毕"), data);
		const result = artists.map((v, i) => ({ ...v, introduction: data[i].introduction }));
		return result;
	});
};

const getSongUrl = async (list = []) => {
	console.log(chalk.cyanBright("开始检测是否可以下载"));
	return Promise.all(list.map((v) => getSongStatusXHR(v.id)))
		.then((data) => {
			console.log(chalk.green("检测完毕"), data);
			return data.map((v, i) => ({ ...list[i], success: v.success }));
		})
		.then((data) => {
			const ids = data
				.filter((v) => v.success)
				.map((v) => v.id)
				.join(",");
			console.log(chalk.cyanBright("开始准备下载"), ids);
			return getSongUrlXHR(ids);
		})
		.then(({ data }) => {
			console.log(chalk.green("获取歌曲链接完毕"));
			const result = data.map(({ id, url, size, br }) => ({ id, url, size, br }));
			return result;
		});
};

const downloadFile = async (url, id) => {
	console.log(chalk.cyanBright("开始下载"));
	const { data } = download(url);
	if (fs.existsSync(DOWNLOADPATH)) {
		const writeStream = fs.createWriteStream(`${DOWNLOADPATH}/${id}.mp3`, { encoding: "binary" });
		data.pipe(writeStream);
		data.on("close", () => {
			console.log(chalk.green("下载完毕"), id);
			writeStream.close();
		});
	}
};

export { getAllListSong, getLyric, getArtistInfo, getArtistDesc, getSongUrl, downloadFile };
