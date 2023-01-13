//use the values on the rental api

var getRentalBtn = document.getElementById('rental-button')
var rentalStart = document.querySelector(".rentalStart")
var resultShow = document.querySelector(".results")
var rental1 = document.getElementById('1rental')
var body = document.getElementById("body")



function rentalInput(){
    var checkoutD = document.getElementById('checkoutD').value
	var aNumber = document.getElementById('adult-number').value
	var cNumber = document.getElementById('children-number').value
    var city = localStorage.getItem("city");
    var region = localStorage.getItem("region");
    var aDate = localStorage.getItem("aDate");
    rentalData(city, region, aDate, checkoutD, aNumber, cNumber)
    showResults()
}


function rentalData(city, region, aDate, checkoutD, aNumber, cNumber){
    console.log(city)
    console.log(region)
    console.log(aDate)
    console.log(checkoutD)
    console.log(aNumber)
    console.log(cNumber)


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6c1819b5d5msh224df4793f36756p19b1cfjsnef2c211706bb',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };
    
    fetch(`https://airbnb13.p.rapidapi.com/search-location?location=${city}%2C${region}&checkin=${aDate}&checkout=${checkoutD}&adults=${aNumber}&children=${cNumber}&&page=1`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}

function showResults (){
    rentalStart.setAttribute("id","hide")
    resultShow.removeAttribute("id","hide")
    body.setAttribute("style", "background-image:none")
}

getRentalBtn.addEventListener('click', rentalInput)
