//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let allNumbers = [...odd,...even]

console.log(allNumbers);

//Exercise #2
// Define an object favoriteFoods that has keys representing three of 
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built

let favFoods = {
 chickenKarahi: "BarBq Spot",
 lomain: "fatima chinese",
 BerryNapolean: "Martha's country bakery" 
}
let ImgFrdfavFoods = {
 steak: "Eddy's",
 abc: "google",
 xyz: "yahoo" 
}

let allFoods = {
...favFoods,
  ...ImgFrdfavFoods
}

console.log(allFoods);

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


let favMovieCharac = {
  name: "Batman",
  age: "35",
  hometown: "Gotham"
}

const {name,age, ...others} = favMovieCharac;

console.log(`my favourite character is ${name}, his age is ${age} and his hometown is ${others.hometown}.`);

let age= 5;
let breed = 'husky';
let nAme = 'tommy';

favMovieCharac = {
  ...favMovieCharac,
  pet : {
    age,
    breed,
    nAme
  }
}

console.log(`the name of the pet is ${favMovieCharac.pet.nAme}`)

