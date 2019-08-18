const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    //aici in loc de obiectul 'data', am fol destructuring
    //si am pui direct properties {latitude, long...}
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            //daca pui return aici, nu mai ai nev de else
            return console.log(error)
        }
        //iar aici in loc de data.latitude, folosesc direct properties pt ca destructuring mai sus
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}
