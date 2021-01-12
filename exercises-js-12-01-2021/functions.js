'use strict';

//1. Palindrome

function palindrome(str){
    str = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let string  = true;
    let wordLength = str.length;
    for(let Index = 0; Index < (wordLength /2); Index++){
        if(str.charAt(Index) !== str.charAt(wordLength - Index - 1)){
            string = false;
        }
    }
    return string;
}

console.log(palindrome("A man, a plan, a canal. Panama"));      //Result: true
console.log(palindrome("not a palindrome"));                   //Result: False


//2. Alphabetic order

function alphabet_order(str){

    return str.split('').sort().join('');
}

console.log(alphabet_order("webmaster"));       //Result: abeemrstw


//3. Reversed number

function reverseNumber(n){

	return n.toString().split("").reverse().join("");
}

console.log(reverseNumber(32243));          //Result: 34223


//4. Longest word

function longestWord(str){
    let arr = str.split(" ");
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        arr1[i] = arr[i].length;
    }
    let long = Math.max(...arr1);
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length === long){
            return arr[i];
        }
    }
}

console.log(longestWord("Web Development Tutorial"));       //Result: Development



//5. Arrays

function commonElements(arr1, arr2){
    let arr = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                arr.push(arr1[i]);
            }
        }
    }
    return arr;
}

console.log(commonElements([1, 2, 3, 4], [1, 4, 6, 8]));        //Result: [ 1, 4 ]



//6. Unique values

function uniqueValues(arr){
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
       if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
           arr1.push(arr[i]);
       }
    }
    return arr1;
}

console.log(uniqueValues([6, 1, 1, 4, 5, 6, 11, 10, 11, 8]));       //Result: [ 4, 5, 10, 8 ]



//7. Number to array of digits

function numberToArray(num){
    return num.toString().split("").map(Number);
}

console.log(numberToArray(132123));         //Result: [ 1, 3, 2, 1, 2, 3 ]