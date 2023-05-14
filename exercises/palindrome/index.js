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
    const reverse = str.split("").reduce((group, el) => {
        return el + group;
    }, "");

    return str === reverse;
}

module.exports = palindrome;
