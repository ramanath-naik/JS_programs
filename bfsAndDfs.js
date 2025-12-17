const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
};


// BFS traversal
function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];
  let result = [];

  visited.add(start);

  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}

console.log(bfs(graph, "A"));



// DFS traversal
function dfsIterative(graph, start) {
  let stack = [start];
  let visited = new Set();
  let result = [];

  while (stack.length > 0) {
    let node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      for (let neighbor of graph[node].reverse()) {
        stack.push(neighbor);
      }
    }
  }
  return result;
}

console.log("DFS Traversal:", dfsIterative(graph, "A"));
