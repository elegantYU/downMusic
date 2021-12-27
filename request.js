const axios = require("axios");

const BASE_URL = "https://netease-cloud-music-api-two-khaki.vercel.app";

const request = axios.create({
	baseURL: BASE_URL,
	timeout: 60000,
});

request.interceptors.response.use((response) => {
	if (response.status === 200) {
		return Promise.resolve(response.data);
	}
	return Promise.reject(response);
});

module.exports = request;
