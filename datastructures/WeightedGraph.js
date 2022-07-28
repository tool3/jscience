class SillyQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.pop();
  }

  sort() {
    this.values.sort((a, b) => b.priority - a.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
    this.distances = {};
    this.previous = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = {};
    }
  }

  addEdge(source, target, weight) {
    this.adjacencyList[source][target] = { value: target, weight };
    this.adjacencyList[target][source] = { value: source, weight };
  }

  initDistances(source) {
    this.queue = new SillyQueue();
    const distances = {};
    const previous = {};

    for (let vertex in this.adjacencyList) {
      if (vertex === source) {
        distances[vertex] = 0;
        this.queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        this.queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    this.distances = distances;
    this.previous = previous;
  }

  calculateWeight(smallest, neighbor) {
    const nextNode = this.adjacencyList[smallest][neighbor];
    const candidate = this.distances[smallest] + nextNode.weight;
    const nextNeighbor = nextNode.value;

    if (candidate < this.distances[nextNeighbor]) {
      this.distances[nextNeighbor] = candidate;
      this.previous[nextNeighbor] = smallest;
      this.queue.enqueue(nextNeighbor, candidate);
    }
  }

  traverseNodes(smallest) {
    if (smallest || this.distances[smallest] !== Infinity) {
      for (const neighbor in this.adjacencyList[smallest]) {
        this.calculateWeight(smallest, neighbor);
      }
    }
  }

  printPath(smallest) {
    const path = [];
    while (this.previous[smallest]) {
      path.push(smallest);
      smallest = this.previous[smallest];
    }
    return path.concat(smallest).reverse();
  }

  getShortestPath(source, target) {
    this.initDistances(source);
    let smallest;
    
    while (this.queue.values.length) {
      smallest = this.queue.dequeue().value;
      if (smallest === target) {
        // done! we found the shortest path between source and target
        return this.printPath(smallest);
      }
      this.traverseNodes(smallest);
    }
  }

  shortestPathUgly(source, target) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;
    // init
    for (let vertex in this.adjacencyList) {
      if (vertex === source) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === target) {
        // done!
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.value;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}
