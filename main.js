//Exercise #1
// Define two arrays, evens and odds filled with even
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds
console.log('Exercise 1');
const arr1 = [ 1, 3, 5, 7 ];
const arr2 = [ 2, 4, 6, 8 ];
let newArr = [ ...arr1, ...arr2 ];
console.log(newArr);

//Exercise #2
// Define an object favoriteFoods that has keys representing three of
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your
// imaginary friend what their favorite foods are.
// Use the spread operator to build a final allFoods with the
// items from the two objects you just built
console.log('\nExercise 2');
const favoriteFoods = {
	burger: "Jimbo's",
	pizza: 'Golden Pizza',
	chickenPestoPasta: 'Home'
};
const imaginaryFavoriteFoods = {
	krabbyPatty: 'Krusty Krab',
	waffles: "JJ's Diner",
	rumHam: "Paddy's Pub"
};

let finalFoods = { ...favoriteFoods, ...imaginaryFavoriteFoods };
console.log(finalFoods);
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
// console.log('\nExercise 3');
let favoriteMovieChar = {
	name: 'Michael Myers',
	age: '64',
	homeTown: 'Haddonfield'
};
const { name: charName, age: charAge, homeTown: charHomeTown } = favoriteMovieChar;
console.log(charName, charAge, charHomeTown);

const { age, ...other } = favoriteMovieChar;
console.log(other);
// let pet = {

// };
