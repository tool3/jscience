class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = current.next;
      this.length++;
    }
  }

  remove(val) {
    if (!this.head) return null;
    let current = this.head;
    let previous = null;
    while (current.val != val && current.next) {
      previous = current;
      current = current.next;
    }

    if (current.val === val) {
      previous.next = current.next;
      this.length--;
      return true;
    }

    return false;
  }

  reverse() {
    if (!this.head) return null;
    let current = this.head;
    let previous = null;

    this.tail = current;

    while (current) {
      const temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }

    this.head = previous;

    return this;
  }
}

// const linkedList = new LinkedList();
// linkedList.add(1);
// linkedList.add(2);
// linkedList.add(3);
// linkedList.add(4);
// linkedList.add(5);
// console.log(linkedList);
// linkedList.remove(3);
// linkedList.remove(6);
// console.log(linkedList);
// console.log(linkedList.reverse());

const reverseBetween = function (head, left, right) {
  if (!head) return null;
  let current = head;
  let previous = null;
  let startNode = null;
  let index = 1;

  while (current) {
    if (index >= left && index <= right) {
      if (!startNode) startNode = current;
      const temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    } else {
      if (startNode) {
        startNode.next = current;
      }
      current = current.next;
    }
    index++;
  }

  if (!current) {
    head.next = previous;
  }

  if (previous.next === null) {
    return previous;
  } else {
    previous.next.next = null;
    head = previous;
  }

  return head;
};
// 1 -> 3 -> 5 -> 6 -> 10
// 1 -> 6 -> 5 -> 3 -> 10

// const list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(3);
// list.add(5);

// const middle = reverseBetween(list.head, 1, 2);
// console.log(middle);

module.exports = { LinkedList, Node };
