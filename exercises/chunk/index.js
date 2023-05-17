// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     return array.reduce((group, item, i) => {
//         const indexOfChunk = Math.floor(i / size);

//         if (!group[indexOfChunk]) {
//             group[indexOfChunk] = [];
//         }

//         group[indexOfChunk].push(item);

//         return group;
//     }, []);
// }
function chunk(array, size) {
    const res = [];
    let idx = 0;
    // idx = 0, idx=2,

    while (idx < array.length) {
        res.push(array.slice(idx, idx + size));

        idx += size;
    }
    return res;
}
module.exports = chunk;
