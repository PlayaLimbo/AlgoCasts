// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     const str = n.toString().split("").reverse().join("");
//     const res = parseInt(str);

//     if (str[str.length - 1] === "-") {
//         return res * -1;
//     } else {
//         return res;
//     }
// }

function reverseInt(n) {
    const str = n.toString().split("").reverse().join("");
    const res = parseInt(str);
    return res * Math.sign(n);
}

module.exports = reverseInt;
