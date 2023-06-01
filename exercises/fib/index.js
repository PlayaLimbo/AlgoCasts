// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function reqfib(n) {
    if (n < 2) {
        return n;
    }

    return reqfib(n - 1) + reqfib(n - 2);
}

function fib(n) {
    //
    const seq = [0, 1]; // init value

    for (let i = 2; i <= n; i++) {
        const a = seq[seq.length - 1];
        const b = seq[seq.length - 2];
        let next = a + b;
        seq.push(next);
    }

    return seq[n];
}

module.exports = fib;
