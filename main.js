//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds

let even = [2, 4, 6, 8, 10]
let odd = [1, 3, 5, 7, 9]
let together = [...odd, ...even]
console.log(together)
    //Exercise #2
    // Define an object favoriteFoods that has keys representing three of 
    // your favorite foods and the values should be the restaurant where
    // they are from
    // Make another object and do the same thing but ask your 
    // imaginary friend what their favorite foods are. 
    // Use the spread operator to build a final allFoods with the 
    // items from the two objects you just built
let favoriteFoods = {
    halalMunchies: 'Turkey Melt',
    chopt: 'Shrimp salad',
    vanLeewan: 'SaltedCaramel Icecream'
}

let mrYummy = {
    Wendys: 'Apple Pecan Salad',
    Subway: 'Turkey Footlong',
    Friendlys: 'Chocolate Suprise'
}
let allFoods = {...favoriteFoods, ...mrYummy }
console.log(allFoods)

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

let flash = {
    name: 'Barry Allen',
    age: 27,
    hometown: 'Central City'
}

const { name, age, hometown } = flash;

console.log(`${name}, ${age}, ${hometown}`)

const pet = {}
flash = {...flash, pet }
let petName = 'Dino'
let petAge = 10
let petBreed = 'Vizslas'
flash.pet.name = petName
flash.pet.age = petAge
flash.pet.breed = petBreed
console.log(flash.pet.breed)