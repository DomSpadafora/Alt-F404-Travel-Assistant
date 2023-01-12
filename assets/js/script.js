var getDateBtn = document.getElementById('search-button')
var background = document.getElementById('background')
 
       ////Bulma Calender Functionality/////
// To access to bulmaCalendar instance of an element
var element = document.querySelector('#my-element');
if (element) {
	// bulmaCalendar instance is available as element.bulmaCalendar
	element.bulmaCalendar.on('select', function(datepicker) {
		console.log(datepicker.data.value());
	});
}

function flightData() {

	var dDate = document.getElementById('depatureD').value
	var aDate = document.getElementById('arrivalD').value
	var fNumber = document.getElementById('flight-number').value
	var dAirport = document.getElementById('depature-airport').value
	var aAirport = document.getElementById('arrival-airport').value
console.log(dDate,aDate,fNumber,dAirport,aAirport)
travelData(dDate, aDate, fNumber, dAirport, aAirport)
}

function travelData (dDate, aDate, fNumber, dAirport, aAirport){
	console.log(dDate)
	console.log(aDate)
	console.log(fNumber)
	console.log(dAirport)
	console.log(aAirport)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c1819b5d5msh224df4793f36756p19b1cfjsnef2c211706bb',
		'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
	}
};

fetch(`https://flight-info-api.p.rapidapi.com/schedules?version=v1&DepartureDate=${dDate}&ArrivalDate=${aDate}&FlightNumber=${fNumber}&DepartureAirport=${dAirport}&ArrivalAirport=${aAirport}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}


getDateBtn.addEventListener('click', flightData)