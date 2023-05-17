// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// so for this example i picture an object that will contain
// key value pairs that contain the key:and a value of 1
// so in essence the obj will look like this fro the string: 'hello':
// const obj = {h:1,e:1,l:2,o:1}
// so we need to find a way to create a object like that assign it a initValue of 1
// and increase that value if the character appears again
// to do this we start by creating the object responsible for storing our key value pairs
// at first it will be empty but we will populate it eventually
// next we create a initValue for all of our  keys and we set it equal to 1.
// next we need a variable that will store our most common character
// this variable will be a let variable because it will allow use
// to change its value if another character is most commonly used
// then we create a let variable for our maxValue that will contain the max value
// a key has: for example {h:1,e:1,l:2,o:1} the key 'l' has a value of 2
// and that is our maxValue. at initialization it will have a value of zero.
// because we don't know what the maxValue is.
// we then put our logic into effect by starting to loop over the string

// first we check if our object has a key value pair.
// if a key value pair doesn't exist we create it and assign it a init value of 1
// if a key value pair  exist we simply increase its value by 1
// at this point our object will look like this {h:1,e:1,l:2,o:1}
// so we now start checking which key value is higher than our maxValue
// if we have any key value  higher than our maxValue we set the maxValue
//  equal to the highest key value
// then we do the same for the mostCommonChar
// replacing its old value with a new value only if key value  higher than our maxValue
// finally we return the mostCommonChar variable

function maxChar(str) {
    const obj = {};
    const initValue = 1;
    let maxValue = 0;
    let mostCommonChar = "";

    for (const char of str) {
        if (!obj[char]) {
            obj[char] = initValue;
        } else {
            obj[char]++;
        }
        // so for the string 'hello'
        // our first iteration is 'h'
        // that at this point will be stored in our object with a init value of 1
        // and because value is 1 is higher than our maxValue
        // we re-write the maxValue variable with the highest most current value
        // during the first iteration maxValue of 0 will be replace by a new value of 1
        // we do this check for every iteration and the same for the  mostCommonChar variable
        if (obj[char] > maxValue) {
            maxValue = obj[char];
            mostCommonChar = char;
        }
    }

    return mostCommonChar;
}

module.exports = maxChar;
