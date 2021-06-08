class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.depth = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (current && current.value > value) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        }
        this.depth++;
      }
    }
  }

  find(value) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value === value) {
        return current;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  // depth first
  inOrder() {
    const results = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return results;
  }

  preOrder() {
    const results = [];
    function traverse(node) {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    }

    traverse(this.root);
    return results;
  }

  // depth first iterative
  dfsi() {
    const results = [];
    const queue = [];
    const visited = {};

    queue.push(this.root);
    while (queue.length) {
      const current = queue.pop();
      if (!visited[current.value]) {
        visited[current.value] = true;
        if (current.left) queue.push(current.left);
        results.push(current.value);
        if (current.right) queue.push(current.right);
      }
    }

    return results;
  }

  // breadth first
  bfs() {
    const results = [];
    const queue = [];
    const visited = {};

    queue.push(this.root);
    while (queue.length) {
      const current = queue.shift();
      results.push(current.value);
      if (!visited[current.value]) {
        visited[current.value] = true;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }

    return results;
  }

  // breadth first recursive
  bfsr() {
    const results = [];
    const queue = [];
    const visited = {};

    queue.push(this.root);

    function traverse(queue) {
      const current = queue.shift();
      results.push(current.value);
      if (!visited[current.value]) {
        visited[current.value] = true;
        if (current.left) traverse([current.left]);
        if (current.right) traverse([current.right]);
      }
    }
    traverse(queue);
    return results;
  }
}

const tree = new BST();
tree.add(10);
tree.add(6);
tree.add(3);
tree.add(8);
tree.add(15);
tree.add(20);
console.log(tree.find(7));
console.log(tree.depth);
console.log('pre', tree.preOrder());
console.log('in', tree.inOrder());
console.log('post', tree.postOrder());
console.log('dfs itreative', tree.bfs());
console.log('breadth', tree.bfs());
// console.log(tree.dfsi())
