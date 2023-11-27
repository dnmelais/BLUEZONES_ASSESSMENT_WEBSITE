const dialog = document.querySelector("dialog")

const cityData = [
    {
        city_id: "Loma Linda",
        city_name: "Loma Linda, CA, USA",
        city_details: "Fun facts."
    },
    {
        city_id: "Nicoya",
        city_name: "Nicoya, Costa Rica",
        city_details: "Fun facts."
    },
    {
        city_id: "Sardinia",
        city_name: "Sardinia, Italy",
        city_details: "Fun facts."
    },
    {
        city_id: "Ikaria",
        city_name: "Ikaria, Greece",
        city_details: "Fun facts."
    },
    {
        city_id: "Okinawa",
        city_name: "Okinawa, Japan",
        city_details: "Fun facts."
    },

]  

showDialog = (city) => {
    // get the city data from the array above using the identifier that was passed in.
    const cityContent = cityData.find(c => city == c.city_id);

    // Unnecessary console log. Just for learning.
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
