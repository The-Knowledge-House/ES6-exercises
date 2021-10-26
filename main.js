//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds

const even = [2, 4, 6]
const odds = [1, 3, 5]
const moreEvens = [...even, ...odds]

//Exercise #2
// Define an object favoriteFoods that has keys representing three of 
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built

const favoriteFoods = {
    churasco : "Leticias Restaurant",
    empanadas : "Mamas Empanadas",
    pancakes : "Eat Here Now Restaurant"
}
const favoriteFoods2 = {
    waffles : "The Jackson Rights",
    bandera : "Hornado Ecuatoriano",
    guatita : "Vicky's Restaurant"
}
const allFood = {
    ...favoriteFoods,
    ...favoriteFoods2
}


// Exercise #3
// Define your favorite movie character in an object
// with three keys: name, age, and hometown

// Use destructuring to extract all three keys into variables
// log all three variables
// Use the spread operator to extract two of the keys but not the third
// store and log this new set of variables


// Now we are going to give this person a pet
// Use destructuring to do the following
// 1) add a pet object to your person
// 2) define three variables (age, breed, name) outside of the object
// 3) add those variables to your pet
// log the most important thing about it: the pet's name 

const favMovieCharacter = {
    name: "Spongebob",
    age: 20,
    hometown: "Bikini Bottom",
    pet : {
        age: "",
        breed: "",
        name: ""
    }
}
const {name, age, hometown, pet} = favMovieCharacter

pet.age = 2
pet.breed = "snail"
pet.name = "Gary"
console.log(name)
console.log(age)
console.log(hometown)
console.log(pet)
console.log(pet.name)