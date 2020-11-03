//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds

const evenArray = [30, 32, 34, 36, 38, 40];
const oddArray = [31, 33, 35, 37, 39, 41];

let spreadArray = [...oddArray, ...evenArray];

//console.log(spreadArray);

//Exercise #2
// Define an object favoriteFoods that has keys representing 
//three of 
// your favorite foods and the values should be the restaurant 
// where they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built

const favoriteFoods = {
    'Thai': { restaurant:'Thai Bistro' },
    'Peruvian': {restaurant: 'Ceviche 105'},
    'Jamaican': {restaurant: 'Negril Village'}
};

const imaginaryFoods = {
    'Bengali': { restaurant:'Polash' },
    'Ethiopian': {restaurant: 'Abyssinia'},
    'Japanese': {restaurant: 'Tampopo Ramen'}
};

const allFoods = {
    ...favoriteFoods,
    ...imaginaryFoods
};

//console.log(allFoods);

// Exercise #3
// Define your favorite movie character in an object
// with three keys: name, age, and hometown
// Use destructuring to extract all three keys into variables
// log all three variables
// 
//Use the spread operator to extract two of the keys but not
//the third store and log this new set of variables
// 
// Now we are going to give this person a pet
// Use destructuring to do the following
// 1) add a pet object to your person
// 2) define three variables (age, breed, name) outside of the object
// 3) add those variables to your pet
// log the most important thing about it: the pet's name 

actor = {
    name: 'Michael B. Jordan',
    age: '33',
    hometown: 'Santa Ana, CA'
};

//const { name, age, hometown } = actor;
//console.log(name, age, star.hometown);

const { name, age, ...star } = actor
console.log(name, age, star.hometown);

const pet = {}
actor = { ...actor, pet }
let petName = 'Oxtail'
let petAge = 3
let petBreed = 'Bull Terrier'

actor.pet.Name = petName
actor.pet.Age = petAge
actor.pet.Breed = petBreed

console.log(actor.pet.Name)