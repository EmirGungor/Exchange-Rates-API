// Elementleri Seçme
const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect);



eventListeners();

function eventListeners(){
    amountElement.addEventListener("input", exchangeCurrency); //When inp
    firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    };
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };

    
}


function exchangeCurrency(){
    currency.changeAmount(amountElement.value)
    currency.exchange()
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err => console.log(err))

}



// Currency Exchange Web Application
// This project is a currency exchange web application built with HTML, JavaScript, and the ExchangeRate-API. It allows users to input an amount and select two currencies to convert between.

// Key Learnings:

// JavaScript Fetch API: I deepened my understanding of the Fetch API by making API requests to retrieve real-time currency exchange rates. This project provided hands-on experience in handling asynchronous operations with Fetch, allowing me to better understand how to work with external APIs.
// JavaScript Promises: I improved my skills in managing asynchronous code using Promises. I learned how to handle data retrieval efficiently and manage the various states of a promise (pending, fulfilled, and rejected).
// DOM Manipulation: I enhanced my ability to dynamically update the user interface based on API responses, making the application interactive and responsive to user input.
// This project was a valuable opportunity to practice and solidify my knowledge of modern JavaScript techniques, specifically focusing on fetching data from an API and handling the data asynchronously.



