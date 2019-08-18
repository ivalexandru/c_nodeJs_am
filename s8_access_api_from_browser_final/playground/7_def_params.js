const greeter = (name = "user", age) => {
    console.log(`hello ${name}`)
}
greeter("andrei")

greeter() // hello undefined


//daca incerci sa faci destructuring si nu exista obj acolo, err pt ca undefined
//poti avea default value un obj gol ={}
const transaction = (type, { label, stock } = {}) => {
    console.log(type, label, stock)
}
//when u call the func, u pass the obj, not the properties
transaction("order")