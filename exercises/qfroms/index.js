// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(el) {
        this.first.push(el);
    }

    remove() {
        // from a to b
        while (this.first.peek()) {
            const el = this.first.pop();
            this.second.push(el);
        }

        const record = this.second.pop();
        // from b to a
        while (this.second.peek()) {
            const el = this.second.pop();
            this.first.push(el);
        }
        return record;
    }
    peek() {
        while ((this.first, peek())) {
            const el = this.first.pop();
            this.second.push(el);
        }
        const record = this.second.peek();

        while (this.second.peek()) {
            const el = this.second.pop();
            this.first.push(el);
        }
        return record;
    }
}

module.exports = Queue;
