//Exercise #1
// Define two arrays, evens and odds filled with even
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds
let even = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];

let numbers = [...even, ...odd];

console.log(numbers);

//Exercise #2
// Define an object favoriteFoods that has keys representing three of
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your
// imaginary friend what their favorite foods are.
// Use the spread operator to build a final allFoods with the
// items from the two objects you just built

const favoriteFoods = {
	burger: "Cheeburger Cheeburger",
	pizaa: "Margherita Pizza",
	chicken: "Popeyes Louisiana Kitchen",
};

const friendFavoriteFoods = {
	steak: "LongHorn Steakhouse",
	pasta: "Maestro Pasta",
	sushi: "Sushi Nakazawa",
};

const allFoods = {
	...favoriteFoods,
	...friendFavoriteFoods,
};

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

let favMovieCharacter = {
	name: "Captain Jack Sparrow",
	age: 60,
	hometown: "Shipwreck Cove",
};

// const { name, age, hometown } = favMovieCharacter;
// console.log(name, age, hometown);

let { hometown, ...value } = favMovieCharacter;
console.log(value);

const pet = {};
favMovieCharacter = {
	...favMovieCharacter,
	pet,
};

const pet = {};
favMovieCharacter = {
	...favMovieCharacter,
	pet,
};

let Name = "Who Knows";
let Age = 20;
let Breed = "Scarlet Macaw";
favMovieCharacter.pet.Name = Name;
favMovieCharacter.pet.Age = Age;
favMovieCharacter.pet.Breed = Breed;

console.log(favMovieCharacter.pet.Name);
console.log(pet);
console.log(favMovieCharacter);

