// Tree Node class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Pre-order Traversal: Root -> Left -> Right
function preOrder(node, result = []) {
  if (node === null) return result;
  
  result.push(node.value);      // Visit root
  preOrder(node.left, result);  // Traverse left
  preOrder(node.right, result); // Traverse right
  
  return result;
}

// In-order Traversal: Left -> Root -> Right
function inOrder(node, result = []) {
  if (node === null) return result;
  
  inOrder(node.left, result);   // Traverse left
  result.push(node.value);      // Visit root
  inOrder(node.right, result);  // Traverse right
  
  return result;
}

// Post-order Traversal: Left -> Right -> Root
function postOrder(node, result = []) {
  if (node === null) return result;
  
  postOrder(node.left, result);  // Traverse left
  postOrder(node.right, result); // Traverse right
  result.push(node.value);       // Visit root
  
  return result;
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

/*
Tree structure:
       1
      / \
     2   3
    / \ / \
   4  5 6  7
*/

console.log("Pre-order :", preOrder(root));
console.log("In-order :", inOrder(root));
console.log("Post-order :", postOrder(root));