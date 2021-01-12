1. Is the String Empty?

Create a function that returns true if a string is empty and false otherwise.
Examples
isEmpty("") ➞ true
isEmpty(" ") ➞ false
isEmpty("a") ➞ false
Notes
A string containing only white spaces " " does not count as empty.
Don't forget to return the result.

2. Compare Strings by Count of Characters

Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
Examples
comp("AB", "CD") ➞ true
comp("ABC", "DE") ➞ false
comp("hello", "edabit") ➞ false
Notes
Don't forget to return the result.

3. Concatenate First and Last Name into One String

Given two strings, firstName and lastName, return a single string in the format "last, first".
Examples
concatName("First", "Last") ➞ "Last, First"
concatName("John", "Doe") ➞ "Doe, John"
concatName("Mary", "Jane") ➞ "Jane, Mary"
Notes
Don't forget to return the result.

4. Name Greeting!

Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
Examples
helloName("Gerald") ➞ "Hello Gerald!"
helloName("Tiffany") ➞ "Hello Tiffany!"
helloName("Ed") ➞ "Hello Ed!"
Notes
The input is always a name (as string).
Don't forget the exclamation mark!

5. Check String for Spaces

Create a function that returns true if a string contains any spaces.
Examples
hasSpaces("hello") ➞ false
hasSpaces("hello, world") ➞ true
hasSpaces(" ") ➞ true
hasSpaces("") ➞ false
hasSpaces(",./!@#") ➞ false
Notes
An empty string does not contain any spaces.
Try doing this without RegEx.

6. Char-to-ASCII

Create a function that returns the ASCII value of the passed in character.
Examples
ctoa("A") ➞ 65
ctoa("m") ➞ 109
ctoa("[") ➞ 91
ctoa("\") ➞ 92
Notes
Don't forget to return the result.

7. Case Insensitive Comparison

Write a function that validates whether two strings are identical. Make it case insensitive.
Examples
match("hello", "hELLo") ➞ true
match("motive", "emotive") ➞ false
match("venom", "VENOM") ➞ true
match("mask", "mAskinG") ➞ false

8. Remove the First and Last Characters

Create a function that removes the first and last characters from a string.
Examples
removeFirstLast("hello") ➞ "ell"
removeFirstLast("maybe") ➞ "ayb"
removeFirstLast("benefit") ➞ "enefi"
removeFirstLast("a") ➞ "a"
Notes
If the string is 2 or fewer characters long, return the string itself (See Example #4).

9. Check if the Same Case

Create a function that returns true if an input string contains only uppercase or only lowercase letters.
Examples
sameCase("hello") ➞ true
sameCase("HELLO") ➞ true
sameCase("Hello") ➞ false
sameCase("ketcHUp") ➞ false

10. Strange Pair

A pair of strings form a strange pair if both of the following are true:
The 1st string's first letter = 2nd string's last letter.
The 1st string's last letter = 2nd string's first letter.
Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.
Examples
isStrangePair("ratio", "orator") ➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".
isStrangePair("sparkling", "groups") ➞ true
isStrangePair("bush", "hubris") ➞ false
isStrangePair("", "") ➞ true
Notes
It should work on a pair of empty strings (they trivially share nothing).


11. Repeat the Same Item Multiple Times

Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
Examples
repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]
repeat(13, 5) ➞ [13, 13, 13, 13, 13]
repeat("7", 2) ➞ ["7", "7"]
repeat(0, 0) ➞ []
Notes
item can be either a string or a number.
times will always be a number.