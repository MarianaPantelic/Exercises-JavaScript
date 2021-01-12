'use strict';

console.log("1.-----------------------------------------");

function isEmpty(str){
    return str.length == 0;
}

console.log(isEmpty(" abcf"));   //Result: false
console.log(isEmpty(" "));      //Result: false
console.log(isEmpty(""));      //Result: true


console.log("2.-----------------------------------------");

function comp(str1, str2){
    return str1.length == str2.length;
}

console.log(comp("AB", "CD"));            //Result: true
console.log(comp("ABC", "DE"));          //Result: false
console.log(comp("hello", "edabit"));   //Result: false


console.log("3.-----------------------------------------");

function concatName(str1, str2){
    return str2.concat(", ", str1);
}

console.log(concatName("First", "Last"));  //Result: Last, First
console.log(concatName("John", "Doe"));   //Result: Doe, John


console.log("4.-----------------------------------------");

let helloName = str => "Hello " + str + "!";

console.log(helloName("Gerald"));     //Result: Hello Gerald!


console.log("5.-----------------------------------------");

function hasSpaces(str){
    return str.indexOf(" ") >= 0;
}

console.log(hasSpaces("hello"));            //Result: false
console.log(hasSpaces("hello, world"));    //Result: true
console.log(hasSpaces(" "));              //Result: true


console.log("6.-----------------------------------------");

function ctoa(str){
    return str.charCodeAt();
}

console.log(ctoa("A"));     //Result: 65
console.log(ctoa("m"));    //Result: 109
console.log(ctoa("["));   //Result: 91



console.log("7.-----------------------------------------");

function match(str1, str2){
    if(str1.length !== str2.length) return false;
    else{
        for(let index = 0; index < str1.length; index++){
            return str1.charAt[index] === str2.charAt[index];
        }
    }
}

console.log(match("hello", "hELLo"));          //Result: true
console.log(match("motive", "emotive"));      //Result: false
console.log(match("venom", "VENOM"));        //Result: true
console.log(match("mask", "mAskinG"));      //Result: false


console.log("8.-----------------------------------------");

function removeFirstLast(str){
    if(str.length > 2) return str.slice(1, str.length-1);
    else return str;
}

console.log(removeFirstLast("hello"));       //Result: 'ell'
console.log(removeFirstLast("maybe"));      //Result: 'ayb'
console.log(removeFirstLast("benefit"));   //Result: 'enefi'
console.log(removeFirstLast("a"));        //Result: 'a'


console.log("9.-----------------------------------------");

function sameCase(str){
    return ((str === str.toUpperCase()) || (str === str.toLowerCase()));
}

console.log(sameCase("hello"));       //Result: true
console.log(sameCase("HELLO"));      //Result: true
console.log(sameCase("Hello"));     //Result: false
console.log(sameCase("ketcHUp"));  //Result: false



console.log("10.-----------------------------------------");

function isStrangePair(str1, str2){
    return (str1.charAt(0) === str2.charAt(str2.length - 1)) && (str1.charAt(str1.length - 1) === str2.charAt(0));
}

console.log(isStrangePair("ratio", "orator"));          //Result: true
console.log(isStrangePair("sparkling", "groups"));     //Result: true
console.log(isStrangePair("bush", "hubris"));         //Result: true
console.log(isStrangePair("", ""));                  //Result: true



console.log("11.-----------------------------------------");


function repeat(item, times) {
    let arr = [];
    if(typeof(item) === "number" || typeof(item) === "string"){
        for(let index = 0; index < times; index++){
            arr[index] = item;
        }
    } 
    return arr;
}

console.log(repeat("edabit", 3));   //Result: [ 'edabit', 'edabit', 'edabit' ]
console.log(repeat(13, 5));        //Result: [ 13, 13, 13, 13, 13 ]
console.log(repeat("7", 2));      //Result: [ '7', '7' ]
console.log(repeat(0, 0));       //Result: []



