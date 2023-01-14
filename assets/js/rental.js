//use the values on the rental api

var getRentalBtn = document.getElementById('rental-button')
var rentalStart = document.querySelector(".rentalStart")
var resultShow = document.querySelector(".results")
var body = document.getElementById("body")
var mainDiv = document.getElementById("mainDiv")



function rentalInput(){
    var checkoutD = document.getElementById('checkoutD').value
	var aNumber = document.getElementById('adult-number').value
	var cNumber = document.getElementById('children-number').value
    var city = localStorage.getItem("city");
    var region = localStorage.getItem("region");
    var aDate = localStorage.getItem("aDate");
    rentalData(city, region, aDate, checkoutD, aNumber, cNumber)
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
        .then(response => showResults(response))
        .catch(err => console.error(err));

        

}

function showResults (response){
    console.log(response)
    rentalStart.setAttribute("id","hide")
    resultShow.removeAttribute("id","hide")
    body.setAttribute("style", "background-image:none")

    for (let index = 0; index < 9 ; index++) {
        //Data
        const element = response.results[index];
        var name = element.name
        var rating = element.rating
        var bedrooms = element.bedrooms
        var bathrooms = element.bathrooms
        var persons = element.persons
        var singlePrice = element.price.rate
        var totalPrice = element.price.total
        var deeplink = element.deeplink
        var images = element.images[0]
        
        //Empty Page Elements
        var divEl = document.createElement("div")
        divEl.setAttribute("class", "column is-one-quarter-desktop is-half-mobile box has-text-black")
        mainDiv.append(divEl)
        var nameEl = document.createElement("h3")
        var ratingEl = document.createElement("h4")
        var bedroomsEl = document.createElement("h4")
        var bathroomsEl = document.createElement("h4")
        var personsEl = document.createElement("h4")
        var singlePriceEl = document.createElement("h4")
        var totalPriceEl = document.createElement("h4")
        var deeplinkEl = document.createElement("a")
        deeplinkEl.setAttribute("href", deeplink)

        divEl.append(nameEl, ratingEl, bedroomsEl, bathroomsEl, personsEl, singlePriceEl, totalPriceEl, deeplinkEl)

        //Add Data to Elements
        nameEl.textContent = `Name : ${name}`
        ratingEl.textContent = `Rating: ${rating}`
        bedroomsEl.textContent = `Bedrooms: ${bedrooms}`
        bathroomsEl.textContent = `Bathrooms: ${bathrooms}`
        personsEl.textContent = `People: ${persons}`
        singlePriceEl.textContent = `Single Night: $${singlePrice}`
        totalPriceEl.textContent = `Total Price: $${totalPrice}`
        deeplinkEl.textContent = "Learn More"
        divEl.setAttribute("style", `background-image: url("${images}")`)



        
        
    }
}

getRentalBtn.addEventListener('click', rentalInput)
