const axios = require("axios");
const request = axios.create({
	baseURL: "http://localhost:3080",
});

// 上传歌手信息
const postArtist = async (payload) => request.post("/diary/music/artist/post", payload);
// 上传歌曲
const postMusic = async (payload) => request.post("/diary/music/list/post", payload);

module.exports = {
	postArtist,
	postMusic,
};
