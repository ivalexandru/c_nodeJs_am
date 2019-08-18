console.log("client side js file loaded");

//the FIRSt form, form is the element NAME, nu clasa nu id nu altceva
const weatherForm = document.querySelector("form");
const search = document.querySelector("input") // the FIRST input

//select id with #
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

messageOne.textContent = "from js";


// challenge
// select msg 2 from js
// just before fetch, render loading msg for 1st paragraph and empty second paragraph content
// 
// if err, render err, else load location and forecast


//add event listener to the element:
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault() // pt ca forms refresh the page by default onClick

    const location = search.value

    setTimeout(() => {

    }, 3000)
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {

            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})



