var cityInput = document.getElementById("userPick");

$("#cities-form").submit(function(e){
    e.preventDefault();
    console.log(cityInput.value)
})

// When they submit the city to view the weather I want to call the function that gets the desired information using ajax. 
// and then call the function that prints the information to my city holder div in index.html