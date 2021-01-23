fetch("https://community-open-weather-map.p.rapidapi.com/find?q=london&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "undefined",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

