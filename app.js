const buttonValue =  document.getElementById('search-btn');
const inputValue = document.getElementById('location-input');
const locationElement = document.getElementsByClassName('location')[0];


buttonValue.addEventListener('click', () => {
    const city = inputValue.value;

    fetch(`http://api.weatherapi.com/v1/current.json?key=cfd9951d475e4ee9a6b150213242903&q=${city}`, {mode: 'cors'})
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            locationElement.textContent = response.current.temp_f
            
        })
    

})

