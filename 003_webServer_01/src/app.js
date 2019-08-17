const path = require("path")

const express = require("express")
const hbs = require("hbs")

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
    res.send(
        [
            { forecast: "cloudy" },
            { location: "Bucale" },
        ]
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