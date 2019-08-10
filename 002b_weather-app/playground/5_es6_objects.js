// object property shorthand. add values to an obj
// const name = "Andrew"
// const userAge = 27
//old school:
// const user = {
//     name: name,
//     age: userAge,
//     location: "phil"
// }

//DOAR cand avem o proprietate a carei valoare vine dt-o 
// variabila cu acelasi nume(cu property)
//new hipster way:
// const user = {
//     name,
//     age: userAge,
//     location: "phil"
// }

// object destructuring (extract properties and their values
//into individual variables)
// const product = {
//     label: "red note",
//     price: 3,
//     stock: 201,
//     salePrice: undefined,
// }

// const label = product.label
// const stock = product.stock


//we can rename the variable we end up creating
// label = the property
// productLabel = the new name
//rating nu exista pe obiect, ai sa primesti undefined (daca nu setezi default val)
//poti seta si o valoare default, in caz ca obiectul nu are acea property (rating)
// const { label: productLabel, stock, rating = 5 } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const product = {
    label: "red note",
    price: 3,
    stock: 201,
    salePrice: undefined,
}

//you can destructure an arg right in the argument list
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}
//when u call the func, u pass the obj, not the properties
transaction("order", product)






