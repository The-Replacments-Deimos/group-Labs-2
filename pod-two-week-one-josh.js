"use strict";
// Turn an array of voter objects into a count of how many people voted true.
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted: true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];


    const voteTrueCount = voters.reduce((voteTrueCount, vote) => {
        if(typeof voteTrueCount[vote] === "undefined"){
            voteTrueCount[vote] = 1;
        }else{
            voteTrueCount[vote] +=1;
        }
       return VoteTrueCount;
    }, {});
console.log(voteTrueCount);


// const colorCount = colors.reduce(function(colorCount, color){
//     if(typeof colorCount[color]==="undefined"){
//         colorCount[color] = 1;
//     } else {
//         colorCount[color] += 1;
//     }
//
//     return colorCount;
// },{});

// LECTURE NOTES
// /*********************************************
//  *              .reduce
//  ******************************************** */
//
//
// const numbers = [1, 2, 3, 4, 5];
// //
// // const sum = numbers.reduce((accumulation, currentNumber) => {
// //     return accumulation + currentNumber;
// // }, 0);
//
// //accumulation = 0
// // add 1
// //accumulation = 1
// // add 2
// // accumulation = 3
// // add 3
// // accumulation = 6
// // add 4
// // accumulation = 10
// // add 5
//
// //FINAL ACCUMULATION = 15 (THE SINGLE VALUE THAT THIS IS REDUCED TO)
//
//
//
// // TO DO TOGETHER: Let's reduce our original numbers Array into one single
// // value.
// const difference = numbers.reduce((accumulation, currentNumber) =>{
//     return accumulation - currentNumber;
// }, 100);
// console.log(difference); // = 85
//
// // const difference = numbers.reduce(function(accumulation, currentNumber){
// // //     return accumulation - currentNumber;
// // // }, 100);       SAME VARIANT IN ES5
//
// // TO DO: Using .reduce, subtract all numbers in the numbers Array from a
// // starting point of 100.
//
// const shoppingCarts = [
//     {
//         apples: 8,
//         bananas: 2,
//         oranges: 4,
//         grapes: 24
//     }, {
//         apples: 3,
//         bananas: 6,
//         oranges: 8,
//         grapes: 12
//     } , {
//         apples: 0,
//         bananas: 12,
//         oranges: 0,
//         grapes: 0
//     } , {
//         apples: 4,
//         bananas: 0,
//         oranges: 12,
//         grapes: 10
//     }
// ];
//
// // TO DO: Using .reduce, return the total number of apples.
//
// const totalApples = shoppingCarts.reduce(function(accumulation, cart){
//     return cart + cart.apples;
// },0);
//
// // TO DO TOGETHER: let's use .reduce to return an object that has properties
// // representing total values for each fruit.
//
// const colors = ['red','orange','red','blue','blue','green','red'];
//
// // TO DO: Count the number of times a color appears in this Array. Hint:
// // your initial value should be an empty object.
//
// // const countColors = colors.reduce(function(accumulation, currentValue){
// //     let numberOfTimes = {};
// //     if(currentValue === currentValue){
// //         numberOfTimes += 1;q
// //     }
// // },{});
// // console.log(numberOfTimes);
//
// const colorCount = colors.reduce(function(colorCount, color){
//     if(typeof colorCount[color]==="undefined"){
//         colorCount[color] = 1;
//     } else {
//         colorCount[color] += 1;
//     }
//
//     return colorCount;
// },{});
//
// console.log(colorCount);   // actual hocus pocus magic
//
//
//
// const lyrics = ['we','all','live','in','a','yellow','submarine'];
//
// //TO DO TOGETHER: Using reduce, let's turn this into a string.
// const oneLine = lyrics.reduce(function(currentString, word){
//     return `${currentString} ${word}`;
//     // starts with an empty string
// },"");
// console.log(oneLine);
// console.log(typeof oneLine);