
function getArrivalAirport(aAirport) {
    
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e70849d717mshe1c01a1ea8a137dp15a301jsn03fc382fd86f',
		'X-RapidAPI-Host': 'airports-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(`https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?iata=${aAirport}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))
    .then(response.data.city.region);

}


