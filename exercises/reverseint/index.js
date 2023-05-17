// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // reversing a number
    // step 1 - get the absolute value of the number
    const value = Math.abs(n);
    // step 2 - convert the value into a string
    const str = value.toString();
    // step 3 - convert the str into an array
    const arr = str.split("");
    // step 4 - reverse the array
    const reverse = arr.reverse();
    // step 5 - join the array to turn it into an int
    const join = reverse.join("");
    const toInt = parseInt(join);
    // step 6 - check the value of n - is is positive or negative
    // n < 0 === negative, n>0 positive
    // options one:
    // let isNegative = -1;
    // return n < 0 ? toInt * isNegative : toInt;
    // option two:
    return toInt * Math.sign(n);
}

// function reverseInt(n) {
//     const str = n.toString().split("").reverse().join("");
//     const res = parseInt(str);
//     return res * Math.sign(n);
// }

module.exports = reverseInt;
