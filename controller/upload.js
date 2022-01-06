/*
 * @Date: 2022-01-05 15:14:31
 * @LastEditors: elegantYu
 * @LastEditTime: 2022-01-06 17:33:08
 * @Description: 上传信息
 */
const artists = require("../output/artists.json");
const songsList = require("../output/songsList.json");
const { postArtist, postMusic } = require("../model/upload");

const uploadArtist = async () => {
	try {
		const { data } = await postArtist({ list: artists });
		console.log("歌手上传完毕", data);
	} catch (error) {
		console.log("报错了", error);
	}
};

const uploadMusic = async () => {
	try {
		const { data } = await postMusic({ list: songsList });
		console.log("歌曲信息上传完毕", data);
	} catch (error) {
		console.log("报错了", error);
	}
};

const task = async () => {
	await uploadArtist();
	await uploadMusic();
};

module.exports = {
	task,
};
