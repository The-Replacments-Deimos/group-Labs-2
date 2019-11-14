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


    const voteTrueCount = voters.reduce(function(voteTrueCount, vote) {
        if(vote.voted === true){
            voteTrueCount += 1;
        }
       return voteTrueCount; // Robert the god, helped me find that the first character in voteTrueCount was capitalized
    }, 0);
console.log(voteTrueCount);

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishList = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const shoppingSpree = wishList.reduce(function(accumulation, currentValue){
    return accumulation + currentValue.price;
},0);

console.log(shoppingSpree); // 227005

