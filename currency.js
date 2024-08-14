class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = "https://v6.exchangerate-api.com/v6/4e7df707a26b9f592c4dde12/latest/";

    this.amount = null;
  }

  exchange(){

    return new Promise((resolve,reject) => {
        fetch(this.url + this.firstCurrency)
            .then(response => response.json())
            .then(data => {
                const parity = data.conversion_rates
                [this.secondCurrency];
                const amount2 = Number(this.amount)

                let total = parity * amount2;
                
                resolve(total);
            })
            .catch(err =>reject(err))
        })
    };
    

  changeAmount(amount){
    this.amount = amount;
  }

  changeFirstCurrency(newFirstCurrency){
    this.firstCurrency=newFirstCurrency;
  }

  changeSecondCurrency(newSecondCurrency){
    this.secondCurrency=newSecondCurrency;
  }



}



// Currency Exchange Web Application
// This project is a currency exchange web application built with HTML, JavaScript, and the ExchangeRate-API. It allows users to input an amount and select two currencies to convert between.

// Key Learnings:

// JavaScript Fetch API: I deepened my understanding of the Fetch API by making API requests to retrieve real-time currency exchange rates. This project provided hands-on experience in handling asynchronous operations with Fetch, allowing me to better understand how to work with external APIs.
// JavaScript Promises: I improved my skills in managing asynchronous code using Promises. I learned how to handle data retrieval efficiently and manage the various states of a promise (pending, fulfilled, and rejected).
// DOM Manipulation: I enhanced my ability to dynamically update the user interface based on API responses, making the application interactive and responsive to user input.
// This project was a valuable opportunity to practice and solidify my knowledge of modern JavaScript techniques, specifically focusing on fetching data from an API and handling the data asynchronously.


