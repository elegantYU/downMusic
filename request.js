const axios = require("axios");

const BASE_URL = "https://netease-cloud-music-api-two-khaki.vercel.app";

const request = axios.create({
	baseURL: BASE_URL,
	timeout: 60000,
});

module.exports = request;
