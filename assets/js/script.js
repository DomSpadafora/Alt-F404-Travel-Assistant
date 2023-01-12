var getDateBtn = document.getElementById('search-button')
 
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
}

getDateBtn.addEventListener('click', flightData)
