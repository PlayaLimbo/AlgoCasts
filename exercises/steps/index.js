// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// * solution 1
function steps(n) {
    for (let idx = 1; idx <= n; idx++) {
        let row = "#".repeat(idx); // Create a string with '#' repeated i times
        let spaces = " ".repeat(n - idx); // Create a string with spaces for the right-hand side
        console.log("-", row, spaces, "-");
    }
}

// function steps(n) {}

module.exports = steps;
