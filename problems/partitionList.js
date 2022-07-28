const { LinkedList, Node } = require('./LinkedList');
var partition = function (head, x) {
  // create 2 pointers and 2 head pointers
  // traverse list again and anything less than x keep in a separate list
  // join the 2 lists

  let current = head;

  let before = new Node(0);
  let after = new Node();
  let beforeHead = before;
  let afterHead = after;

  while (current) {
    if (current.val < x) {
      before.next = current;
      before = before.next;
    } else {
      after.next = current;
      after = after.next;
    }

    current = current.next;
  }
  after.next = null;
  before.next = afterHead.next;

  return beforeHead.next;
};

const list = new LinkedList();
list.add(1);
list.add(4);
list.add(3);
list.add(2);
list.add(5);
list.add(2);
console.log(list);
partition(list.head, 3);
