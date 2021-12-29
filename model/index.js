// 所有用到的接口
const http = require("http");
const fs = require("fs");
const url = require("url");
const request = require("../request");
const { UID, COOKIE, PLAYLIST, DOWNLOADPATH } = require("../config");
const cookie = encodeURIComponent(COOKIE);

// 获取歌单所有歌曲
const getAllListSongXHR = async (id) => request.get("/playlist/track/all", { params: { id } });

// 获取单曲url
const getSongUrlXHR = async (id, br = 128000) =>
	request.get("/song/url", { params: { id, br, cookie } });

// 音乐是否还能用
const getSongStatusXHR = async (id, br = 128000) =>
	request.get("/check/music", { params: { id, br } });

// 获取歌词
const getLyricXHR = async (id) => request.get("/lyric", { params: { id } });

// 获取歌手信息
const getArtistInfoXHR = async (id) => request.get("/artist/detail", { params: { id } });
// 获取歌手更详细描述
const getArtistDescXHR = async (id) => request.get("/artist/desc", { params: { id } });

// download
const download = async (u, id) => {
	const href = url.parse(u);
	const { host, pathname } = href;

	return new Promise((resolve, reject) => {
		const client = http.request(
			{
				hostname: host,
				method: "GET",
				path: pathname,
				headers: {
					Accept:
						"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
					"Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
					Connection: "keep-alive",
					Pragma: "no-cache",
					Host: host,
					"User-Agent":
						"Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
				},
			},
			(res) => {
				res.on("error", reject);

				const fileBuffer = [];
				res.on("data", (chunk) => fileBuffer.push(new Buffer(chunk)));
				res.on("end", () => {
					const total = Buffer.concat(fileBuffer);
					fs.appendFile(`${DOWNLOADPATH}/${id}.mp3`, total, resolve);
				});
			}
		);

		client.end();
	});
};

module.exports = {
	getAllListSongXHR,
	getSongUrlXHR,
	getSongStatusXHR,
	getLyricXHR,
	getArtistInfoXHR,
	getArtistDescXHR,
	download,
};
