console.log("client side js file loaded");

//fetch api e inteles de browsers, nu de node ! deci node nu il va putea rula

//fetch json data from an url, parse it into a js obj
//fetch is async
// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// challenge:
// set up a call to fetch the data for Boston
//get the parse JSON response
// if err => print err
// if no err => print location and forecast

// fetch("http://localhost:3000/weather?address=boston").then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector("form");
const search = document.querySelector("input")


// challenge:
// use input value (ce tastezi in form) to get the weather
// migrate the fetch call into the submit callback (pana amu fetch rula chiar daca nu dadea nimeni submit)
// vrei sa fie callback pe addEventListener
// use text search value as the value for the text query string
// (ce tastezi sa ajunga in url-ul din fetch)
//

//add event listener to the element:
weatherForm.addEventListener("submit", (e) => {
    e.preventDefault() // pt ca forms refresh the page by default onClick

    const location = search.value

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})



