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
                if (j - 2 >= 0 && i - 1 >= 0 && arrayGrid[i - 1][j - 2] === 1) {
                    noCapture = false;
                }
                //    left left down
                if (j - 2 >= 0 && i + 1 < arrayGrid.length && arrayGrid[i + 1][j - 2]) {
                    noCapture = false;
                }
                //    right right up
                if (j + 2 <= arrayGrid[i].length && i - 1 >= 0 && arrayGrid[i - 1][j + 2] === 1) {
                    noCapture = false;
                }
                //    right right down
                if (j + 2 <= arrayGrid[i].length && i + 1 < arrayGrid.length && arrayGrid[i + 1][j + 2]) {
                    noCapture = false;
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

let firstLetterFruits = [];
fruits.map(fruit => firstLetterFruits.push(fruit[0]));

// console.log(firstLetterFruits);

//Create array of user objects based on the customers array of objects (each user object should just have name
// and age properties)

let userArray = [];

customers.map(customer => userArray.push({name: customer.name, age: customer.age}));

// console.log(userArray);

//Create an array of civil servant customers (teachers and police officers) containing the same properties as
// the objects on the customers objects

let civilServants = customers.filter(customer => customer.occupation === 'Teacher' || customer.occupation === 'Police Officer');

// console.log(civilServants);

//Determine the average age of all the customers
let totalAge = customers.reduce((total, customer) => {
    return total += customer.age;
}, 0);

let avgAge = totalAge / customers.length;
// console.log(avgAge);

//Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object
// with the following shape...
//{
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//     age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }

const makeSuperPet = () => {
    return {
        name: pets.reduce((petString, pet) => petString += pet.name, ""),
        age: pets.reduce((petAge, pet) => petAge += pet.age, 0),
        breed: pets.reduce((breedLetters, pet) => breedLetters += pet.breed[0], "")
    };
};

// console.log(makeSuperPet());

//Create a function that takes in an array of pets and returns an array of the length of first names for pugs only.
// Your output for the given input should be [3, 6] for 'Bud' and 'Bowser'

const pugNameLength = (petObj) => {
    let pugPets = petObj.filter(pet => pet.breed === 'Pug');
    let returnArray = [];
    pugPets.map(pet => returnArray.push(pet.name.length));
    return returnArray;
};

// console.log(pugNameLength(pets));

//Create a function getFemaleFamilyMembers() that when given the family variable as an argument, returns an array
// of female family member names
function getFemaleFamilyMembers(familyObj) {
    let femaleArray = familyObj.filter(member => member.gender === 'female');
    let returnArray = [];
    femaleArray.map(member => returnArray.push(member.name));
    return returnArray;
}

// console.log(getFemaleFamilyMembers(family));

//Create a function makeLongPetString() that when given the variable of pets, returns a string of all 
// property values with dashes separating each property value

function makeLongPetString(petObj) {
    let returnArray = [];

}

//WEEK 2 **************************************************************************************************************
//*********************************************************************************************************************
//*********************************************************************************************************************

//Problem 1
//site: https://edabit.com/challenge/y7xoBP9bgHRNTcELK
//problem: String Cleaver
//Create a function that takes a string (without spaces) and a word array, cleaves the string into words based on the
// array, and returns the correctly spaced version of the string (a sentence). If a section of the string is
// encountered that can't be found on the word array, return "Cleaving stalled: Word not found".

const words = ["about", "be", "hell", "if", "is", "it", "me", "other", "outer", "people", "the", "to", "up", "where"];

function cleave(str,arr){
    let shadowStr = str;
    arr.forEach(word =>{
        let tempWord = '/'+word+'/g';
        // let bs = word.replace(word, '/'+word+'/g');
        // let tempWord = bs;
        // console.log(tempWord);
       str = str.replace(tempWord, (word + " "));
        // console.log(str);
       shadowStr = shadowStr.replace(tempWord,'');
    });
    if (shadowStr !== ""){
        return "Cleaving stalled: Word not found";
    }else{
        return str;
    }
}


// function cleave(str, arr) {
//     let returnString = "";
//     let shadowStr = str;
//     let arrayCount = arr.length;
//     let tempString;
//     let noWordsMatch = () => {
//         let foundMatch = false;
//         arr.forEach(word => {
//             if (str.search(word) !== -1) {
//                 foundMatch = true;
//             }
//         });
//     };
//     if (noWordsMatch() === false || str === "") {
//         return "Cleaving stalled: Word not found";
//     }
//
//     // let foundArray = str.match(word);
//     // console.log(foundArray);
//
//     // while (x =10){
//     // while (shadowStr !== "") {
//     //     arrayCount = 1;
//     //     arr.forEach(word => {
//     //         if (str.search(word) !== -1) {
//     //             str = str.replace(/word/g, (word + ' '));
//     //             shadowStr = shadowStr.replace(/word/g, '');
//     //         }
//     //         arrayCount++;
//     //     });
//     //     if (re){
//     //         return returnString = "Cleaving stalled: Word not found";
//     //     }
//     // }
//
//     // }
//     // return str;
//
//
// }

// function cleave(str, arr) {
//     let returnString = "";
//     let sortObjectArray =[];
//     let placementNum = 1;
//     // let stringArray = [];
//     // let foundWordArray = [];
//     let noWordsMatch = () =>{
//         let foundMatch = false;
//         arr.forEach(word =>{
//             if (str.search(word) !== -1){
//                 foundMatch = true;
//             }
//         });
//         return foundMatch;
//     };
//
//     console.log(noWordsMatch());
//     if (noWordsMatch() === true) {
//         arr.forEach(word => {
//             let n = str.search(word);
//             if (n === -1) {
//                 sortObjectArray.push({
//                     placement: -1,
//                     word: ""
//                 });
//                 // foundWordArray.push(-1);
//                 // return "Cleaving stalled: Word not found";
//             } else {
//                 sortObjectArray.push({
//                     placement: n,
//                     word: word
//                 })
//                 // stringArray.push(str.slice(n,word.length));
//                 // foundWordArray.push(n);
//             }
//         });
//
//         // console.log(sortObjectArray);
//
//         sortObjectArray.sort((a, b) => parseFloat(a.placement) - parseFloat(b.placement));
//         // console.log(sortObjectArray);
//         sortObjectArray.forEach(obj => {
//             if (obj.placement >= 0) {
//                 if (returnString === "") {
//                     returnString = obj.word;
//                 } else {
//                     returnString += " " + obj.word;
//                 }
//             }
//         });
//
//         return returnString;
//     }else {
//         return "Cleaving stalled: Word not found";
//     }
// }

// console.log(cleave("ifitistobeitisuptome", words));


//Problem 2
//site:https://edabit.com/challenge/9cE48rX6wTZqBWeia
//problem: Sentence Primeness
//A word value can be established summing up all the numeric values of every single character (excluding spaces and
// punctuation): a value from 1 ("a") to 26 ("z") is given to letters, while numbers have their literal values,
// from 0 to 9. The sentence value is the sum of the values of the words.

function sentencePrimeness(sentence) {
    let total = 0;
    let semiTotal = 0;
    let sumArray = [];
    let numOfPrimes = 0;

    sentence = sentence.toLowerCase();
    const isPrime = (value) => {
        for(var i = 2; i < value; i++) {
            if(value % i === 0) {
                return false;
            }
        }
        return value > 1;
    };

    sentence = sentence.replace(/[^\w\s]/gi,'');
    let  sentenceArray = sentence.split(" ");
    // console.log(sentence);
    sentenceArray.forEach(word =>{
        semiTotal = 0;
        for (let i = 0; i < word.length;i++){
            if( parseInt(word[i]) === 0 || parseInt(word[i]) === 1 || parseInt(word[i]) === 2 ||
                parseInt(word[i]) === 3 || parseInt(word[i]) === 4 || parseInt(word[i]) === 5 ||
                parseInt(word[i]) === 6 || parseInt(word[i]) === 7 || parseInt(word[i]) === 8 ||
                parseInt(word[i]) === 9 ){
                semiTotal += parseInt(word[i]);
            }else {
                semiTotal += word[i].charCodeAt(0) - 96;
            }
        }
        sumArray.push(semiTotal);
        total += semiTotal;
    });


    if (isPrime(total) === true){
        return "Prime Sentence"
    }
        for (let i = 0; i < sumArray.length; i++){
        // sumArray.forEach(num =>{
            if (isPrime(total - sumArray[i]) === true){
                return "Almost Prime Sentence ("+sentenceArray[i]+")";
            }
        }

    return "Composite Sentence"
    // return total;
}

// console.log(sentencePrimeness('Help me!'));
// console.log(sentencePrimeness('42 is THE aNsWeR...'));
// console.log(sentencePrimeness('Did you smoke?'));

//Problem 3
//site: https://edabit.com/challenge/J6ZGG6AvXQzqRpRsy
//Problem: Connecting Words
//Write a function that connects each previous word to the next word by the shared letters. Return the resulting
// string (removing duplicate characters in the overlap) and the minimum number of shared letters across all
// pairs of strings.

function join(array) {
    let returnString = array[0];
    let returnMin = -1;
    let canCombine = false;
    for (let i = 0; i < array.length; i++){
        if (i+1 !== array.length){
            for (let j = 0; j < array[i].length; j++){
                if (array[i][j] === array[i+1][0]){
                    let remainingLetters = array[i].slice(j);
                    let startOFNextLetters = array[i+1].slice(0,remainingLetters.length);
                    if (remainingLetters === startOFNextLetters){
                        returnString += array[i+1].slice(remainingLetters.length);
                        canCombine = true;
                        if (returnMin === -1 || returnMin < remainingLetters.length){
                            returnMin = remainingLetters.length;
                        }
                    }
                }
            }
            if (canCombine === false){
                returnString += array[i+1];
                returnMin = 0;
            }
        }
        canCombine = false;
    }

    return [returnString,returnMin];
}

console.log(join(["oven", "envier", "erase", "serious"]));
console.log(join(["move", "over", "very"]));
console.log(join(["to", "ops", "psy", "syllable"]));
console.log(join(["aaa", "bbb", "ccc", "ddd"]));

//Problem 4 (extra)
//site: https://edabit.com/challenge/9MEWMJ5eX8EAiWSs5
//Problem: Unique Character Mapping
//Write a function that returns a character mapping from a word.

function characterMapping(str){
    let uniqueArray = [];
    let hasMatch = false;
    let returnArray = [];
    let uniqueIndex = -1;
    // console.log(uniqueArray);
    for (let i=0;i <str.length;i++){
        for (let j = 0; j < uniqueArray.length; j++) {
            if (str[i] === uniqueArray[j]) {
                // returnArray.push(uniqueArray.indexOf(uniqueArray[j]));
                uniqueIndex = uniqueArray.indexOf(uniqueArray[j]);
                hasMatch = true;
            }
        }
        if (hasMatch === false) {
            uniqueArray.push(str[i]);
            uniqueIndex = uniqueArray.indexOf(str[i]);
        }
        returnArray.push(uniqueIndex);
        hasMatch = false;
    }

    return returnArray;

}

console.log(characterMapping("abcd"));
console.log(characterMapping("abb"));
console.log(characterMapping("babbcb"));
console.log(characterMapping("hmmmmm"));