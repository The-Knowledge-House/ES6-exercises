//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds

const evens = [2, 4, 6, 8, 10, 12, 16, 20];
const odds = [1, 3, 5, 7, 9, 11, 13, 15, 17];

const evenAndOdds = [...evens, ...odds];
console.log(evenAndOdds);

//Exercise #2
// Define an object favoriteFoods that has keys representing three of 
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built

const favoriteFoods = {
    Khalils: 'Sizzling lamb',
    PremiumSweets: 'Chicken bihari',
    EstrellitaMixteca: 'Shrimp tacos'
};

const imaginaryFavoriteFoods = {
    McDonalds: 'Big Mac',
    BurgerKing: 'Whopper',
    DunkinDonuts: 'Glazed donut'
};


const finalFoods = { ...favoriteFoods, ...imaginaryFavoriteFoods };
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

let bladeRunner2049 = {
    character: 'Officer K',
    age: 13,
    hometown: 'Las Vegas'

};

const { character: char, age: charAge, ...other } = bladeRunner2049;
console.log(char, charAge, other.hometown);



const pet = {};
bladeRunner2049 = { ...bladeRunner2049, pet };
let petName = 'Hosico';
let petAge = 3;
let petBreed = 'Scottish Fold';
let age = 3, breed = 'Scottish Fold', name = 'Hosico';
bladeRunner2049.pet = { age, breed, name };
// bladeRunner2049.pet.Name = petName;
// bladeRunner2049.pet.Age = petAge;
// bladeRunner2049.pet.Breed = petBreed;
console.log(`Pet name: ${name}`);




