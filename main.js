//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds

let even = [2, 4, 6, 8];

let odd = [1, 3, 5, 7];

console.log(...even);

console.log(...odd);

//Exercise #2
// Define an object favoriteFoods that has keys representing three of 
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built
let favFood = {
  Carmines: `Mussels`,
  Mamouns: `Lamb Schwarma`,
  Serendipities: `Pasta`
};

let palFavFood = {
  Ihop: `pancakes`,
  Chipotle: `Rice Bowl`,
  ShakeShack: `Burger`

};

let allFood = {...favFood, ...palFavFood};

console.log(allFood);


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

let favMovieCharacter = {
  Name: `Hercules`,
  Age: 18,
  HomeTown: `Athens`
};

console.log(favMovieCharacter);
const {Name} = favMovieCharacter;
const {Age} = favMovieCharacter;
const {HomeTown} = favMovieCharacter;

console.log(`${Name},${Age},${HomeTown}`);

const { name, age, ...me } = favMovieCharacter
console.log(name, age, me.hometown);
const pet = {}
favMovieCharacter = { ...favMovieCharacter, pet }
let petName = 'Pegasus'
let petAge = 10
let petBreed = 'horse'
favMovieCharacter.pet.Name = petName
favMovieCharacter.pet.Age = petAge
favMovieCharacter.pet.Breed = petBreed
console.log(favMovieCharacter.pet.Name);
