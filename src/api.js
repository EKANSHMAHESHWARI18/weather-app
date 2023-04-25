export const geoApiOptions = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "d52a7ba541msh81aa8b5029e9fa0p16e8c4jsn8c928e7944e6",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "7984f28f0ef6fd38c0c3538222db3127"; // enter your key from openweather API






















// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/octet-stream',
// 		'X-RapidAPI-Key': 'd52a7ba541msh81aa8b5029e9fa0p16e8c4jsn8c928e7944e6',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }