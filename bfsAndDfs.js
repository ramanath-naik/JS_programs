// const graph = {
//   A: ["B", "C"],
//   B: ["A", "D", "E"],
//   C: ["A", "F"],
//   D: ["B"],
//   E: ["B"],
//   F: ["C"]
// };


// BFS traversal
// function bfs(graph, start) {
//   let visited = new Set();
//   let queue = [start];
//   let result = [];

//   visited.add(start);

//   while (queue.length > 0) {
//     let node = queue.shift();
//     result.push(node);

//     for (let neighbor of graph[node]) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         queue.push(neighbor);
//       }
//     }
//   }
//   return result;
// }

// console.log(bfs(graph, "A"));



// // DFS traversal
// function dfsIterative(graph, start) {
//   let stack = [start];
//   let visited = new Set();
//   let result = [];

//   while (stack.length > 0) {
//     let node = stack.pop();

//     if (!visited.has(node)) {
//       visited.add(node);
//       result.push(node);

//       for (let neighbor of graph[node].reverse()) {
//         stack.push(neighbor);
//       }
//     }
//   }
//   return result;
// }

// console.log("DFS Traversal:", dfsIterative(graph, "A"));



// Graph representation
class Graph {
  constructor(){
    this.adjList= {};
  }

  //add vertex
  addVertex(vertex){
    if(!this.adjList[vertex]){
      this.adjList[vertex]= [];
    }
  }

  // Add an edge (Undirected)
  addEdge(v1, v2) {
    if (!this.adjList[v1]) this.addVertex(v1);
    if (!this.adjList[v2]) this.addVertex(v2);

    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

   // ---------------- BFS ----------------
  bfs(start) {
    const visited = {};
    const queue = [];
    const result = [];

    queue.push(start);
    visited[start] = true;

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      for (let neighbor of this.adjList[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return result;
  }

  // ----------- DFS (Recursive) ----------
  dfsRecursive(start) {
    const visited = {};
    const result = [];

    const dfs = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);

      for (let neighbor of this.adjList[vertex]) {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
    };

    dfs(start);
    return result;
  }

  // ----------- DFS (Iterative) ----------
  dfsIterative(start) {
    const stack = [];
    const visited = {};
    const result = [];

    stack.push(start);
    visited[start] = true;

    while (stack.length > 0) {
      const vertex = stack.pop();
      result.push(vertex);

      //DFS Recursive processes neighbors in natural order, 
      // but DFS Iterative processes neighbors in reverse order because a stack is LIFO.
      
      // for (let i = this.adjList[vertex].length - 1; i >= 0; i--) { //Push neighbors in reverse order
      // let neighbor = this.adjList[vertex][i];

      for (let neighbor of this.adjList[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }
    return result;
  }
}


// Create graph
const graph = new Graph();

// Add vertices
["A", "B", "C", "D", "E"].forEach(v => graph.addVertex(v));

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

// Print adjacency list
console.log("Adjacency List:");
console.log(graph.adjList);

// Traversals
console.log("\nBFS from A:");
console.log(graph.bfs("A"));

console.log("\nDFS Recursive from A:");
console.log(graph.dfsRecursive("A"));

console.log("\nDFS Iterative from A:");
console.log(graph.dfsIterative("A"));