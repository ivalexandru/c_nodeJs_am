//nu tre instalat pt ca e core module
const https = require("https")

const url = "https://api.darksky.net/forecast/50e9b1d4005efaf5911b606b867babf1/40,-75"
//request takes a url and a callback (response)
const request = https.request(url, (response) => {
    let data = ""

    //in the callback we don't have access to the complete response body, cum aveam pana amu
    //instead, we can grab the individual chunks that come trough
    //tre sa ascultam pana e gata requestul
    response.on("data", (chunk) => {
        //convert to str pt ca e buffer default
        data += chunk.toString()
    })

    response.on("end", () => {
        // parse the json to an obj:
        const body = JSON.parse(data)
        console.log(body)

    })
})
//fires when an error occurres
request.on("error", (error) => {

})

request.end()
