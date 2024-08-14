class UI{
    constructor(firstSelect,secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.querySelector("#outputFirst");
        this.outputSecond = document.querySelector("#outputSecond");
        this.outputResult = document.querySelector("#outputResult");
    }


    changeFirst(){
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent
    }
    changeSecond(){
        this.outputSecond.textContent = this.firstSelect.options[this.secondSelect.selectedIndex].textContent
    }
    displayResult(result){
        this.outputResult.value = result;
    }
}

//Currency Exchange Web Application
// This project is a currency exchange web application built with HTML, JavaScript, and the ExchangeRate-API. It allows users to input an amount and select two currencies to convert between.

// Key Learnings:

// JavaScript Fetch API: I deepened my understanding of the Fetch API by making API requests to retrieve real-time currency exchange rates. This project provided hands-on experience in handling asynchronous operations with Fetch, allowing me to better understand how to work with external APIs.
// JavaScript Promises: I improved my skills in managing asynchronous code using Promises. I learned how to handle data retrieval efficiently and manage the various states of a promise (pending, fulfilled, and rejected).
// DOM Manipulation: I enhanced my ability to dynamically update the user interface based on API responses, making the application interactive and responsive to user input.
// This project was a valuable opportunity to practice and solidify my knowledge of modern JavaScript techniques, specifically focusing on fetching data from an API and handling the data asynchronously.

