class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = {};
    }
  }

  addEdge(source, target) {
    this.adjacencyList[source][target] = 1;
    this.adjacencyList[target][source] = 1;
  }

  removeVertex(value) {
    const targets = this.adjacencyList[value];
    for (const key in targets) {
      this.removeSingleEdge(key, value);
    }
    delete this.adjacencyList[value];
  }

  removeEdge(source, target) {
    this.removeSingleEdge(source, target);
    this.removeSingleEdge(target, source);
  }

  removeSingleEdge(source, target) {
    const src = this.adjacencyList[source];
    delete src[target];
  }

  dfs(vertex) {
    const result = [];
    const visited = {};

    const traverse = (vertex) => {
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        for (const neighbor in this.adjacencyList[vertex]) {
          if (!visited[neighbor]) {
            traverse(neighbor);
          }
        }
      }
    };

    traverse(vertex);
    return result;
  }

  dfsi(vertex) {
    const result = [];
    const visited = {};
    const stack = [vertex];
    let current;
    while (stack.length) {
      current = stack.pop();
      if (!visited[current]) {
        visited[current] = true;
        result.push(current);
        for (const neighbor in this.adjacencyList[current]) {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        }
      }
    }

    return result;
  }

  bfsi(vertex) {
    const result = [];
    const visited = {};
    const queue = [vertex];
    let current;
    while (queue.length) {
      current = queue.shift();
      if (!visited[current]) {
        visited[current] = true;
        result.push(current);
        for (const neighbor in this.adjacencyList[current]) {
          if (!visited[neighbor]) {
            queue.push(neighbor);
          }
        }
      }
    }

    return result;
  }

  traverse(vertex, method) {
    const methods = { bfs: 'shift', dfs: 'pop' };
    const result = [];
    const visited = {};
    const line = [vertex];
    let current;

    while (line.length) {
      current = line[methods[method]]();
      if (!visited[current]) {
        visited[current] = true;
        result.push(current);
        for (const neighbor in this.adjacencyList[current]) {
          if (!visited[neighbor]) line.push(neighbor);
        }
      }
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph);
console.log(graph.dfs('A'));
console.log();
console.log(graph.dfsi('A'));
console.log(graph.traverse('A', 'dfs'));
console.log();
console.log(graph.bfsi('A'));
console.log(graph.traverse('A', 'bfs'));
