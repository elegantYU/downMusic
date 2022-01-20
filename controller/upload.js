/*
 * @Date: 2022-01-05 15:14:31
 * @LastEditors: elegantYu
 * @LastEditTime: 2022-01-20 14:59:31
 * @Description: 上传信息
 */
const artists = require("../output/artists.json");
const songsList = require("../output/songsList.json");
const { postArtist, postMusic } = require("../model/upload");

const uploadArtist = async () => {
	const { data } = await postArtist({ list: artists });
	console.log("歌手上传完毕", data);
};

const uploadMusic = async () => {
	const { data } = await postMusic({ list: songsList[0] });
	console.log("歌曲信息上传完毕", data);
};

const task = async () => {
	try {
		await uploadArtist();
		await uploadMusic();
	} catch (error) {
		console.log("报错了", error);
	}
};

module.exports = {
	task,
};
