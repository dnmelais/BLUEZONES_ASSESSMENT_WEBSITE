const dialog = document.querySelector("dialog")

const cityData = [
    {
        city_id: "Loma Linda",
        city_name: "Loma Linda, CA, USA",
        city_details: "A weekly break from the rigors of daily life, the 24-hour Sabbath provides a time to focus on family, God, camaraderie, and nature. These adventists claim this relieves their stress, strengthens social networks, and provides consistent exercise."
    },
    {
        city_id: "Nicoya",
        city_name: "Nicoya, Costa Rica",
        city_details: "“Plan de vida!” (a reason to live). Nicoyan centenarians frequently visit with neighbors, and they tend to live with families and children or grandchildren who provide support, as well as a sense of purpose."
    },
    {
        city_id: "Sardinia",
        city_name: "Sardinia, Italy",
        city_details: "The classic Sardinian diet consists of whole-grain bread, beans, garden vegetables, fruits, and, in some parts of the island, mastic oil. Sardinians also traditionally eat pecorino cheese made from grass-fed sheep, whose cheese is high in omega-3 fatty acids. Meat is largely reserved for Sundays and special occasions."
    },
    {
        city_id: "Ikaria",
        city_name: "Ikaria, Greece",
        city_details: "Today, Ikarians are almost entirely free of dementia and some of the chronic diseases that plague Americans; one in three make it to their 90s. A combination of factors explain it, including geography, culture, diet, lifestyle and outlook. They enjoy strong red wine, late-night domino games and a relaxed pace of life that ignores clocks."
    },
    {
        city_id: "Okinawa",
        city_name: "Okinawa, Japan",
        city_details: "Okinawans have less cancer, heart disease and dementia than Americans, and women there live longer than any women on the planet. Older Okinawans can readily articulate the reason they get up in the morning.Their purpose-imbued lives gives them clear roles of responsibility and feelings of being needed well into their 100s. Embrace “ikigai”!"
    },

]  

showDialog = (city) => {
    // get the city data from the array above using the identifier that was passed in.
    const cityContent = cityData.find(c => city == c.city_id);


    console.log(`Showing dialog for city: ${cityContent.city_name}`);

    const dialogContentContainer = document.getElementById("content-container");
    const dialogContent = `
    <h3>${cityContent.city_name.toUpperCase()}</h3>
    <p>${cityContent.city_details}</p>
    `;

    // Assign the modal content to the element that was constructed above.
    dialogContentContainer.innerHTML = dialogContent;

    // This is a built-in function from the dialog element on line 23.
    dialog.showModal();

    // Close the dialog when the user clicks on the dialog itself
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
}


function evaluateSurvey() {
    // Get the selected answers
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value,
    };

    // Count "yes" answers
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;

    // Display result message
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.innerHTML = (yesCount >= 3) ?
        "Your city is an excellent candidate for the Blue Zones Project!" :
        "Your city may not be the best fit for the Blue Zones Project.";
}
// this is an arrow function
 const loadCountryAPI = () =>{
    // fetch url of rest countries from website
        fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data => displayCountries(data))
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      };
      
      // call the function to get output in the console
      loadCountryAPI();
    

 //displaying all countries
 const displayCountries = countries =>{
        console.log(countries);
        const countriesHTML = countries.map(country => getCountry(country))
        // displaying div to html
        const container = document.getElementById('countries');
        container.innerHTML = countriesHTML.join('');
    }
    const getCountry = (country) => {
        console.log(country);
        return `
          <div class="country-div">
            <img src="${country.flags.png}">
            <h2>${country.name.common}</h2>
            <h4>Population: ${country.population}</h4>
            <h4>Region: ${country.region}</h4>
            <h4>Capital: ${country.capital}</h4>
          </div>
        `;
      };
      
