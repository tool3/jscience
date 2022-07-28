class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this.bubble(node);
    // this.bubbleRecursive(value, this.values.length - 1);
  }

  // bubbleRecursive(value, index) {
  //   const parentIndex = Math.floor((index - 1) / 2);
  //   if (parentIndex < 0) return;
  //   if (this.values[parentIndex] < value) {
  //     const parentValue = this.values[parentIndex];
  //     this.values[parentIndex] = value;
  //     this.values[index] = parentValue;
  //     this.bubbleRecursive(value, parentIndex);
  //   }
  // }

  bubble(node) {
    let index = this.values.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.values[parentIndex];
      if (node.priority <= parentNode.priority) break;
      this.values[parentIndex] = node;
      this.values[index] = parentNode;
      index = parentIndex;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.sinkRecursive(0);
      // this.sink()
    }
    return max;
  }

  sinkRecursive(index) {
    const currentNode = this.values[index];
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    const leftNode = this.values[leftIndex];
    const rightNode = this.values[rightIndex];

    if (leftNode?.priority > currentNode.priority && leftNode?.priority > rightNode?.priority) {
      this.values[index] = leftNode;
      this.values[leftIndex] = currentNode;
      this.sinkRecursive(leftIndex);
    }

    if (rightNode?.priority > currentNode.priority && rightNode?.priority > leftNode?.priority) {
      this.values[index] = rightNode;
      this.values[rightIndex] = currentNode;
      this.sinkRecursive(rightIndex);
      // OR simply return this.sinkToChild(index, leftIndex, leftValue, currentValue)
    }
  }

  sinkToChild(index, childIndex, childValue, currentValue) {
    this.values[index] = childValue;
    this.values[childIndex] = currentValue;
    this.sinkRecursive(childIndex);
  }

  sink() {
    let index = 0;
    const current = this.values[0];
    const length = this.values.length;

    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let leftValue, rightValue;
      let swap = null;

      if (leftIndex < length) {
        leftValue = this.values[leftIndex];
        if (leftValue.priority > current.priority) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightValue = this.values[rightIndex];
        if (
          (swap === null && rightValue.priority > current.priority) ||
          (swap !== null && rightValue.priority > leftValue.priority)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }
  }
}

const queue = new PriorityQueue();
queue.enqueue('cold', 1);
queue.enqueue('cut', 3);
queue.enqueue('burn', 4);
queue.enqueue('shot', 5);
queue.enqueue('fever', 2);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
