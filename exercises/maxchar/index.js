// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};

    for (const el of str) {
        if (obj[el]) {
            obj[el]++;
        } else {
            obj[el] = 1;
        }
    }
    const maxValue = Math.max(...Object.values(obj));
    let res;
    for (const key in obj) {
        const curr = obj[key];
        // console.log(curr, key);
        if (curr === maxValue) {
            res = key;
        }
    }
    return res;
}

module.exports = maxChar;
