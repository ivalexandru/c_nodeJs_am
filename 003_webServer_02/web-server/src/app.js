const path = require("path")

const express = require("express")
const hbs = require("hbs")

const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const app = express();

//define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//pt a folosi hbs cu express:
app.set("view engine", "hbs");
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// console.log(__dirname) //path to the dir of the current script
// console.log(__filename) //path to the file

// console.log(path.join(__dirname)) // nu face nimic, same directory
// console.log(path.join(__dirname, "..")) // .. goes up a folder
// console.log(path.join(__dirname, "../..")) // go up 2 directories
// console.log(path.join(__dirname, "../public"))

//ia automat/default fisierul index.html ca default route deci nu tre sa mai pointezi catre fisier

//static takes the path to the directory we wanna serve
app.use(express.static(publicDirectoryPath))




//render converts our template to html
//primul arg e numele templateului, al doilea e un obj 
// ce contine ce trebuie sa acceseze viewul
app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Andrei mead"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About me",
        name: "Andrew Mead"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        helpText: "HELP!",
        title: "Help",
        name: "Andr Mea"
    })
})



app.get("/weather", (req, res) => {
    // console.log(req.query) // { search: 'games', rating: '5' }
    if (!req.query.address) {
        return res.send({
            error: "provide address",
        })
    }
    //type in browser:
    // http://localhost:3000/weather?address=orice

    res.send(
        // { req.query.search },
        {
            forecast: "cloudy",
            location: "Bucale",
            address: req.query.address,
        },
        //amu cand intru in browser si bag link de mai sus, imi apare direct json cu ce am cautat, forecast si location
    )
})



//starts with /help/
app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404 help",
        name: "and m",
        errorMessage: "Help article not found"
    });
})


// http://localhost:3000/products?search=games&rating=5
// daca introduc link de mai sus in browser, cu search term si rating etc...
// pe server, informatiile introduse (in Query string) sunt disponibile in request
app.get("/products", (req, res) => {
    //if no search term:
    if (!req.query.search) {
        return res.send({
            error: "you must provide a search term",
        })
    }

    // err: Cannot set headers after they are sent to the client:
    // (de ex daca nu aveai return mai sus in IF)
    //when you try to respond twice to a request



    console.log(req.query)
    //{ search: 'games', rating: '5' }
    console.log(req.query.search) // games

    // req.query

    res.send({
        products: [],
    })
})


//get every OTHER route:
//(must be last route)
app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "And m",
        errorMessage: "P not found"
    });
})






//send back JSON
// app.get("/help", (req, res) => {
//     res.send(
//         [
//             { name: "Andr" },
//             { age: 27 },
//         ]
//     )
// })

// app.get("/about", (req, res) => {
//     res.send("<h1> about title </h1>")
// })



app.listen(3000, () => {
    console.log("server up port 3000")
})