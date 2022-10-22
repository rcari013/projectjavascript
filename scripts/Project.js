//Author: Jeanette Eldredge
var allData = [];
var european_country = [];
var asian_country = [];
var state_in_america = [];
function organize(list)
{
    allData.forEach(element => {
        european_country.push(element.europeanCountry);
        asian_country.push(element.asianCountry);
        state_in_america.push(element.state_in_america);
    });
    
}

const url = 'https://raw.githubusercontent.com/rcari013/projectjavascript/main/api/countries_and_states.json';


fetch(url)
    .then((response) => {
    if (response.ok) {
        return response.json();
    }
    else {
        console.log(error);
    }
})
    .then((response) => {
        allData = response;
        organize(allData);
    });

function reset()
{
    document.querySelector('#countries_and_states').innerHTML = '';
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function refuel(country_or_state)
{
    if (country_or_state == 'e')
    {
        allData.forEach(element => {
            european_country.push(element.europeanCountry);
        });
    }
    else if (country_or_state == 'a')
    {
        allData.forEach(element => {
            asian_country.push(element.asianCountry);
        });
    }
    else
    {
        allData.forEach(element => {
            state_in_america.push(element.state_in_america);
        });
    }
}

function generate()
{
    var selection = document.getElementById('sortBy').value;
    let country_or_state = '';
    let generateNum = 0;

    if (selection == "europeanCountry") {
        if (european_country.length == 1)
        {
            refuel("e");
        }
        generateNum = getRandomInt(european_country.length)
        country_or_state = european_country[generateNum];
        european_country.splice(generateNum, 1);
    }
    else if (selection == "asianCountry")
    {
        if (asian_country.length == 1)
        {
            refuel("a");
        }
        generateNum = getRandomInt(asian_country.length)
        country_or_state = asian_country[generateNum];
        asian_country.splice(generateNum, 1);
    }
    else {
        if (state_in_america.length == 1)
        {
            refuel("l");
        }
        generateNum = getRandomInt(state_in_america.length)
        country_or_state = state_in_america[generateNum];
        state_in_america.splice(generateNum, 1);
    }
    reset();
    output(country_or_state);
}

function output(country_or_state)
{
    const html = `<h3>${country_or_state}</h3>`;
    document.querySelector('#countries_and_states').innerHTML = html;
}

const button = document.querySelector('#Generate');
button.addEventListener('click', generate)
