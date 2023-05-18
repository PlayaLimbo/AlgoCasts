// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const clean = (word) =>
//         word.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();

//     return clean(stringA) === clean(stringB);
// }
//
function anagrams(stringA, stringB) {
    const clean = (word) => word.replace(/[^\w]/g, "");
    const arr = [stringA, stringB];
    const strings = arr.map((el) => clean(el).toLowerCase());
    const [a, b] = strings;

    const objectCreator = (string) => {
        const initValue = 1;
        return [...string].reduce((group, el) => {
            if (!group[el]) {
                group[el] = initValue;
            } else {
                group[el]++;
            }

            return group;
        }, {});
    };

    const stringOne = objectCreator(a);
    const stringTwo = objectCreator(b);
    //
    const valueOne = Object.values(stringOne).sort();
    const valueTwo = Object.values(stringTwo).sort();
    //

    const testOne = (x, y) => Object.keys(x).includes(...Object.keys(y));

    // let result = false;

    console.log(stringOne, stringTwo);
    if (
        testOne(stringOne, stringTwo) &&
        valueOne.every((el, i) => el === valueTwo[i])
    ) {
        return true;
    }

    return false;
}

module.exports = anagrams;
