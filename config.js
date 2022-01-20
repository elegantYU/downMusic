const path = require("path");

const COOKIE =
	"MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/eapi/feedback;;MUSIC_SNS=; Max-Age=0; Expires=Thu, 20 Jan 2022 06:25:55 GMT; Path=/;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/openapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/eapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/api/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/eapi/feedback;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/api/clientlog;;__remember_me=true; Max-Age=1296000; Expires=Fri, 4 Feb 2022 06:25:55 GMT; Path=/;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/api/feedback;;MUSIC_U=28fb6cc9152a28467b81d60c31fa44d585cc1d59868353167b3b19efaeaf60fb519e07624a9f0053d78b6050a17a35e705925a4e6992f61d07c385928f88e8de; Max-Age=1296000; Expires=Fri, 4 Feb 2022 06:25:55 GMT; Path=/;;__csrf=84d6629a7c8d567c6c08143827d19321; Max-Age=1296010; Expires=Fri, 4 Feb 2022 06:26:05 GMT; Path=/;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/eapi/clientlog;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/neapi/clientlog;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/wapi/feedback;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/weapi/feedback;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/weapi/feedback;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/weapi/clientlog;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/neapi/feedback;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/wapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/neapi/feedback;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/api/feedback;;MUSIC_A_T=1447087931074; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/openapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/wapi/feedback;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/wapi/clientlog;;MUSIC_R_T=1447087934736; Max-Age=2147483647; Expires=Tue, 7 Feb 2090 09:40:02 GMT; Path=/neapi/clientlog;";
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
