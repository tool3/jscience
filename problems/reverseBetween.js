const { LinkedList, Node } = require('./LinkedList');

var reverseBetween = function (head, left, right) {
  if (!head) return null;
  if (left === right) return head;
  
  let current = head;
  let prev = null;

  while (left > 1) {
    prev = current;
    current = current.next;
    left--;
    right--;
  }

  let tail = current;
  let con = prev;

  while (right) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
    right--;
  }

  if (con) {
    con.next = prev;
  } else {
    head = prev;
  }

  tail.next = current;
  return head;
};

const list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
list.add(3);
list.add(5);
console.log(reverseBetween(list.head, 1, 2));
