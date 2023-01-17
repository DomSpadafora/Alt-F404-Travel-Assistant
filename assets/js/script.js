var getDateBtn = document.getElementById('search-button')
var background = document.getElementById('background')


function flightData() {

	var dDate = document.getElementById('depatureD').value
	var aDate = document.getElementById('arrivalD').value
	var fNumber = document.getElementById('flight-number').value
	var dAirport = document.getElementById('depature-airport').value
	var aAirport = document.getElementById('arrival-airport').value
	console.log(dDate, aDate, fNumber, dAirport, aAirport)
	travelData(dDate, aDate, fNumber, dAirport, aAirport)
	getArrivalAirport(aAirport)

	
}


function travelData(dDate, aDate, fNumber, dAirport, aAirport) {
	console.log(dDate)
	console.log(aDate)
	console.log(fNumber)
	console.log(dAirport)
	console.log(aAirport)
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'e70849d717mshe1c01a1ea8a137dp15a301jsn03fc382fd86f',
			'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
		}
	};

fetch(`https://flight-info-api.p.rapidapi.com/schedules?version=v1&DepartureDate=${dDate}&ArrivalDate=${aDate}&FlightNumber=${fNumber}&DepartureAirport=${dAirport}&ArrivalAirport=${aAirport}`, options)
	.then(response => response.json())
	.then(response => {
		localStorage.setItem("aDate", aDate)
	})
	.catch(err => console.error(err));

	window.location.href = 'http://127.0.0.1:5500/Alt-F404-Travel-Assistant/rental.html'


}


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
		.then(response => {
			var city = response[0].city
			var region = response[0].region
			console.log(city)
			console.log(region)

			localStorage.setItem("city", city)
			localStorage.setItem("region", region)

			window.location.href = 'http://127.0.0.1:5500/Alt-F404-Travel-Assistant/rental.html';
			

		})
		.catch(err => console.error(err))

		
		
		
	
	}

getDateBtn.addEventListener('click', flightData)