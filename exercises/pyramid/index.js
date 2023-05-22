// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' == idx=0 - space=2, step=1, n=3 -- (2 * 0 + 1) = 1 --(3 - 0 - 1)==2
//       ' ### ' == idx=1 - space=1, step=3, n=3 -- (2 * 1 + 1) = 3
//       '#####' == idx=2 - space=0, step=5, n=3 -- (2 * 2 + 1) = 5

function pyramid(n) {
    for (let i = 0; i < n; i++) {
        const steps = "#".repeat(2 * i + 1);
        const space = " ".repeat(n - i - 1);
        console.log(space + steps + space);
    }
}

module.exports = pyramid;
// - the answer  - i am too detailed oriented
// - brief explanation - i like to take pride in what i do
// - example - i would not send a undercooked taco to a costumer
// - how it applies - i would not send a under finished project to a client
// - how to handle it
