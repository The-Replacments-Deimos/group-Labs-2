"use strict";




// TOO SHORT NOT COUNTING ************************************************
//site https://edabit.com/challenge/3ZtykTsx3GSoPHyBb
//Problem: Tower of Hanoi
//Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.
//

function towerHanoi(discs) {
    if (discs <= 0 || isNaN(discs)) {
        return 0;
    } else {
        return (2 ** discs) - 1;
    }
}

// console.log(towerHanoi(0));
// console.log(towerHanoi("tower"));
// console.log(towerHanoi(3));
// console.log(towerHanoi(5));

//*************************************************************************************


//Problem 1
//site https://edabit.com/challenge/y55uFmf4xCdivNBaT
//problem: Time Elapsed
//Create a function that takes two timestamps as input, and returns a string describing the time elapsed between them
// (in days, hours, minutes, seconds as appropriate).
function elapsed(time1, time2) {
    let timeDifference = time2 - time1;
    const daysToSeconds = 86400;
    const hoursToSeconds = 3600;
    const minutesToSeconds = 60;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let dayString = "";
    let hourString = "";
    let minuteString = "";
    let secondString = "";
    let returnString = "";

    while (timeDifference !== 0) {
        if (timeDifference - daysToSeconds >= 0) {
            days++;
            timeDifference -= daysToSeconds;
        } else if (timeDifference - hoursToSeconds >= 0) {
            hours++;
            timeDifference -= hoursToSeconds;
        } else if (timeDifference - minutesToSeconds >= 0) {
            minutes++;
            timeDifference -= minutesToSeconds;
        } else {
            seconds = timeDifference;
            timeDifference -= seconds;
        }
    }
    if (days !== 0) {
        dayString = days + " day";
        if (days > 1) {
            dayString += "s";
        }
    }
    returnString += dayString;

    if (hours !== 0) {
        returnString += ", ";
        hourString = hours + " hour";
        if (hours > 1) {
            hourString += "s";
        }
    }
    returnString += hourString;

    if (minutes !== 0) {
        returnString += ", ";
        minuteString = minutes + " minute";
        if (minutes > 1) {
            minuteString += 's';
        }
    }
    returnString += minuteString;

    if (seconds !== 0) {
        returnString += ", ";
        secondString = seconds + " second";
        if (seconds > 1) {
            secondString += "s";
        }
    }
    returnString += secondString;

    return returnString;
}

// console.log(elapsed(1559813526, 1559899926));
// console.log(elapsed(1559681004, 1559899926));
// console.log(elapsed(1558773066, 1559899926));



//Problem 2
//site:https://edabit.com/challenge/YFkyAh5sm9Guqth85
//Problem: Knights on a Board
//Write a function that returns true if the knights are placed on a chessboard such that no knight can capture another
// knight. Here, 0s represent empty squares and 1s represent knights.

function cannotCapture(arrayGrid) {
    let noCapture = true;
    if (arrayGrid.length !== 8) {
        noCapture = false;
    }
    arrayGrid.forEach(row => {
        if (row.length !== 8) {
            noCapture = false;
        }
    });

    for (let i = 0; i < arrayGrid.length; i++) {

        for (let j = 0; j < arrayGrid[i].length; j++) {
            //    occupied space needs 8 checks
            if (arrayGrid[i][j] === 1) {
                //    up up left
                if (i - 2 >= 0 && j - 1 >= 0 && arrayGrid[i - 2][j - 1] === 1) {
                    noCapture = false;
                }
                //    up up right
                if (i - 2 >= 0 && j + 1 < arrayGrid[i - 2].length && arrayGrid[i - 2][j + 1] === 1) {
                    noCapture = false;
                }
                //    down down left
                if (i + 2 < arrayGrid.length && j - 1 >= 0 && arrayGrid[i + 2][j - 1] === 1) {
                    noCapture = false;
                }
                //    down down right
                if (i + 2 < arrayGrid.length && j + 1 < arrayGrid[i + 2].length && arrayGrid[i + 2][j + 1] === 1) {
                    noCapture = false;
                }
                //    left left up
                if (j - 2 >= 0 && i-1 >=0 && arrayGrid[i-1][j-2] === 1){
                    noCapture =  false;
                }
                //    left left down
                if (j - 2 >= 0&& i+1 < arrayGrid.length && arrayGrid[i+1][j-2]){
                    noCapture =  false;
                }
                //    right right up
                if (j + 2 <= arrayGrid[i].length && i-1 >=0 && arrayGrid[i-1][j+2] === 1) {
                    noCapture =  false;
                }
                //    right right down
                if (j + 2 <= arrayGrid[i].length && i+1 < arrayGrid.length && arrayGrid[i+1][j+2]){
                    noCapture =  false;
                }
            }
        }
    }
    return noCapture;
}

// console.log(cannotCapture([
//     [0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 1, 0, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 1, 0, 0, 0]
// ]));
//
// console.log(cannotCapture([
//     [1, 0, 1, 0, 1, 0, 1, 0],
//     [0, 1, 0, 1, 0, 1, 0, 1],
//     [0, 0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 1, 0, 0, 1, 0, 1],
//     [1, 0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1],
//     [1, 0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 1, 0, 1, 0, 1]
// ]));

//Problem 3
//site: https://edabit.com/challenge/y7xoBP9bgHRNTcELK
//problem: String Cleaver
//Create a function that takes a string (without spaces) and a word array, cleaves the string into words based on the
// array, and returns the correctly spaced version of the string (a sentence). If a section of the string is
// encountered that can't be found on the word array, return "Cleaving stalled: Word not found".







//*********************************************************************************
//Map filter reduce extra problems
//site: https://java.codeup.com/extra-exercises/javascript/map-filter-reduce/
const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];


//Create an array of the first letters of each fruit

let firstLetterFruits =[];
fruits.map(fruit => firstLetterFruits.push(fruit[0]));

console.log(firstLetterFruits);

//Create array of user objects based on the customers array of objects (each user object should just have name
// and age properties)

let userArray = [];

customers.map(customer => userArray.push({name:customer.name,age:customer.age}));

console.log(userArray);

//Create an array of civil servant customers (teachers and police officers) containing the same properties as
// the objects on the customers objects

let civilServants = customers.filter(customer => customer.occupation === 'Teacher' || customer.occupation === 'Police Officer');

console.log(civilServants);

//Determine the average age of all the customers
let totalAge = customers.reduce((total,customer)=>{
    return total += customer.age;
},0);

let avgAge = totalAge/customers.length;
console.log(avgAge);

//Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object
// with the following shape...
//{
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//     age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }

const makeSuperPet = () =>{
  return {
      name: pets.reduce((petString, pet) => petString += pet.name,""),
      age: pets.reduce((petAge, pet) => petAge += pet.age,0),
      breed: pets.reduce((breedLetters,pet)=> breedLetters += pet.breed[0],"")
  };
};

console.log(makeSuperPet());

//Create a function that takes in an array of pets and returns an array of the length of first names for pugs only.
// Your output for the given input should be [3, 6] for 'Bud' and 'Bowser'

const pugNameLength = (petObj) => {
    let pugPets = petObj.filter(pet => pet.breed === 'Pug');
    let returnArray = [];
    pugPets.map(pet=> returnArray.push(pet.name.length));
    return returnArray;
};

console.log(pugNameLength(pets));

//Create a function getFemaleFamilyMembers() that when given the family variable as an argument, returns an array
// of female family member names
function getFemaleFamilyMembers(familyObj) {
    let femaleArray = familyObj.filter(member => member.gender === 'female');
    let returnArray = [];
    femaleArray.map(member => returnArray.push(member.name));
    return returnArray;
}

console.log(getFemaleFamilyMembers(family));