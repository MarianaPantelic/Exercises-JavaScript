/*
December 15, 2020
Practice recursion in JavaScript
Implement the following exercises in separated functions in both iterative (e.g., loops) and recursive functions, and add a comment for each line of your code

1. Calculate the sum of the natural number up to n. For example:  sum(n) = 1+2+3+...+n
2. Calculate the value of n to the m power
3. Find the nth Fibonacci number, e.g.,  The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
4. Print the integers in range (x, y). Example : range(2, 10) Expected Output  = > 2,3, 4, 5, 6, 7, 8, 9 , 10
*/

//1.--------------------------------------------------

'use strict';

function sum(n){
    let result = 0;
    for(let index = 1; index <= n; index++){
        result += index;
    }
    return result;
}
console.log(sum(5));

//Result: 15

function sumRecursive(n){
    if(n > 0){
        return n + sumRecursive(n-1);
    }
    else return 0; 
}
console.log(sumRecursive(6));

//Result: 21


//2.---------------------------------------------------

function power(n, m){
    let result = 1;
    for(let index = 1; index <= m; index++){
        result *= n;
    }
    return result;
}
console.log(power(2, 3));

//Result: 8


function powerRecursive(n,m){
    let result = 1;
    if(m > 0){
        result = n * powerRecursive(n,m-1)
    }
    return result;
}
console.log(powerRecursive(2,4));

//Result: 16


//3-----------------------------------------------------

function fibonacci(n){
    if(n === 1){
        return 0;
    } else if(n <= 3){
        return 1;
    } else{
        let x = 0;
        let y = 1;
        let sum;
        for(let index = 3; index <= n; index++){
        sum = x + y;
        x = y;
        y = sum;
        }
        return sum;
    }
}
console.log(fibonacci(9));

//Result: 21


function fibonacciRecursive(n){
    if(n === 1){
        return 0;
    } else if(n <= 3){
        return 1;
    } else{
        return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
    }
}
console.log(fibonacciRecursive(9));

//Result: 21



//4. --------------------------------------------------------

function integersRange(x, y){
    let arrRange = [];
    let z = y-x;
    for(let i = 0; i <= z; i++){
        arrRange.push(x);
        x += 1;
    }
    return arrRange;
}
console.log(integersRange(7,15));

//Result: [7,  8,  9, 10, 11, 12, 13, 14, 15]

function integersRangeRecursive(x, y) {
  if (y - x === 0) {
    return [x];
  } else {
    var arrRange = integersRangeRecursive(x, y - 1);
    arrRange.push(y);
    return arrRange;
  }
}
console.log(integersRangeRecursive(8,16));

//Result: [8,  9, 10, 11, 12, 13, 14, 15, 16]
