// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {

// in theory this works just fine.
// however this this is inneficient
// because when we go past the middle of the word
// we check again  for matches..

//     return str.split("").every((el, i) => {
//         return el === str[str.length - i - 1];

//     });
// }

function palindrome(str) {
    // palindrome is a coding challenge to show case array,string and loop manipulation.
    // as well as to show case your critical thinking skills

    // lets start writing some code
    //steps 1 - turn the string into an array - there are multiple ways to turn a string into an array
    // step 2 - we need to find a method that can do two things for simplicity
    // a - iterates over every value of the array
    // b - returns a boolean value
    // step 3 - compare the current element 'el' with the last element of the array
    //
    const res = Array.from(str).every((el, i) => {
        // string == 'hello' - ITERATIONS
        // el = h === first item where i =0
        // el = e === second item where i =1
        // el = l  === third item where i =2
        // el = l === third item where i =3
        // el = o === fifth item where 1 = 4

        //  find the last item of the array in reverse
        // i represents the position of the character we want to access
        // to know the array can be very long and we need to get the compute its length to proceed
        // to do this we call the length method on the string  or the array

        // 'str[str.length - i - 1]' returns the character at the specified index, counting from the end of the string
        // so the math behind it would be something like this:
        // 'hello' - [5 -i-1 ] === [5-0-1]=>[5-1]=>[4] iteration 1 returns 'o'
        // 'hello' - [5 -i-1 ] === [5-1-1]=>[5-1-1]=>[3] iteration 1 returns 'l'
        // * console.log("reverse order", str[str.length - i - 1]);

        // in theory we compare 'h' first item of array against the last in reverse 'o'
        // which in the string hello returns false because => 'h'!='o'
        return el === str[str.length - i - 1];
    });

    return res;
}

module.exports = palindrome;
