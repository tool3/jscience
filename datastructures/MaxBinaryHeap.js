class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubble(value, this.values.length - 1);
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.sink(0);
    }
    return max;
  }

  bubble(value, index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex < 0) return;
    if (this.values[parentIndex] < value) {
      const parentValue = this.values[parentIndex];
      this.values[parentIndex] = value;
      this.values[index] = parentValue;
      this.bubble(value, parentIndex);
    }
  }

  sink(index) {
    const currentValue = this.values[index];
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    const leftValue = this.values[leftIndex];
    const rightValue = this.values[rightIndex];

    if (leftValue > currentValue && leftValue > rightValue) {
      this.values[index] = leftValue;
      this.values[leftIndex] = currentValue;
      this.sink(leftIndex);
    }

    if (rightValue > currentValue && rightValue > leftIndex) {
      this.values[index] = rightValue;
      this.values[rightIndex] = currentValue;
      this.sink(rightIndex);
    }
  }

  bubbleIterative(value) {
    let index = this.values.length - 1;
    while (index !== 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.values[parentIndex];
      if (value <= parentValue) break;
      this.values[parentIndex] = value;
      this.values[index] = parentValue;
      index = parentIndex;
    }
  }

  sinkToChild(index, childIndex, childValue, currentValue) {
    this.values[index] = childValue;
    this.values[childIndex] = currentValue;
    this.sink(childIndex);
  }

  sinkIterative() {
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
        if (leftValue > current) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightValue = this.values[rightIndex];
        if ((swap === null && rightValue > current) || (swap !== null && rightValue > leftValue)) {
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

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);

console.log(heap.extractMax());
console.log(heap.values);
