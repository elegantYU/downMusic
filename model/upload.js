const axios = require("axios");
const request = axios.create({
	baseURL: "https://api.elegantyu.cn/diary",
});

// 上传歌手信息
const postArtist = async (payload) => request.post("/music/artist/post", payload);
// 上传歌曲
const postMusic = async (payload) => request.post("/music/list/post", payload);

module.exports = {
	postArtist,
	postMusic,
};
