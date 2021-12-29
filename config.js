const path = require("path");

const COOKIE = `MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/api/clientlog;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/eapi/feedback;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/neapi/feedback;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/openapi/clientlog;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/wapi/feedback;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/api/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/wapi/clientlog;;__csrf=27b2ebf68f8741bf97fb478ac523cbb3; Max-Age=1296010; Expires=Mon, 10 Jan 2022 05:52:11 GMT; Path=/;;MUSIC_U=28fb6cc9152a28467b81d60c31fa44d5aa357f1c897561f4061f74b0878b2316519e07624a9f0053d78b6050a17a35e705925a4e6992f61d07c385928f88e8de; Max-Age=1296000; Expires=Mon, 10 Jan 2022 05:52:01 GMT; Path=/;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/neapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/neapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/eapi/feedback;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/wapi/clientlog;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/eapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/weapi/feedback;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/openapi/clientlog;;__remember_me=true; Max-Age=1296000; Expires=Mon, 10 Jan 2022 05:52:01 GMT; Path=/;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/api/feedback;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/neapi/feedback;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/wapi/feedback;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/weapi/feedback;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/api/feedback;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Fri, 13 Jan 2090 09:06:08 GMT; Path=/eapi/clientlog;`;
const UID = 103973269;
const PLAYLIST = [7188086413];
const QUALITY = "l"; //  'h', 'm', 'l', ''无损
const DOWNLOADPATH = path.join(__dirname, "/music");
const MUSIC_PATH = "https://www.elegantyu.com";

module.exports = {
	UID,
	COOKIE,
	PLAYLIST,
	QUALITY,
	DOWNLOADPATH,
	MUSIC_PATH,
};
