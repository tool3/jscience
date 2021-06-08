class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = this.last.next;
    }
    this.length++;
  }

  dequeue() {
    if (this.first === this.last) this.last = null;
    if (!this.first) return null;

    const first = this.first;
    this.first = this.first.next;
    this.length--;
    return first;
  }

  print() {
    const results = [];
    let current = this.first;
    while (current) {
      results.push(current.value);
      current = current.next;
    }

    return results.reverse().join(' <- ');
  }
}

// const queue = new Queue();
// queue.enqueue('A')
// queue.enqueue('B')
// queue.enqueue('C')
// console.log(queue.dequeue());
// console.log(queue.print());

// ['A', 'B', 'C']
