// 所有用到的接口
const request = require("../request");
const { UID, COOKIE, PLAYLIST } = require("../config");

// 获取歌单所有歌曲
const getAllListSongXHR = async (id) => request.get("/playlist/track/all", { params: { id } });

// 获取单曲url
const getSongUrlXHR = async (id, br = 128000) => request.get("/song/url", { params: { id, br } });

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
const download = async (url) =>
	request({
		url,
		responseType: "stream",
	});

module.exports = {
	getAllListSongXHR,
	getSongUrlXHR,
	getSongStatusXHR,
	getLyricXHR,
	getArtistInfoXHR,
	getArtistDescXHR,
	download,
};
