// Node class for BST
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value) {
    const newNode = new Node(value);
    
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined; // No duplicates
      
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST
  search(value) {
    let current = this.root;
    
    while (current !== null) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    
    return false;
  }

  // Find the minimum value
  findMin(node = this.root) {
    if (node === null) return null;
    
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }

  // Find the maximum value
  findMax(node = this.root) {
    if (node === null) return null;
    
    while (node.right !== null) {
      node = node.right;
    }
    return node.value;
  }

  // Delete a value from the BST
  delete(value) {
    this.root = this.deleteNode(this.root, value);
    return this;
  }

  deleteNode(node, value) {
    if (node === null) return null;
    
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    } else {
      // Node to delete found
      
      // Case 1: No children (leaf node)
      if (node.left === null && node.right === null) {
        return null;
      }
      
      // Case 2: One child
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;
      
      // Case 3: Two children
      // Find the minimum value in right subtree (inorder successor)
      const minRight = this.findMin(node.right);
      node.value = minRight;
      node.right = this.deleteNode(node.right, minRight);
      return node;
    }
  }

  // In-order traversal (gives sorted order)
  inOrder(node = this.root, result = []) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // Pre-order traversal
  preOrder(node = this.root, result = []) {
    if (node !== null) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // Post-order traversal
  postOrder(node = this.root, result = []) {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  // Get height of the tree
  height(node = this.root) {
    if (node === null) return -1;
    
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Check if tree is balanced
  isBalanced(node = this.root) {
    if (node === null) return true;
    
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }
}

// Example usage
const bst = new BinarySearchTree();

// Insert values
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

/*
Tree structure:
       50
      /  \
    30    70
   / \    / \
  20 40  60 80
*/

console.log("In-order traversal:", bst.inOrder());
console.log("Pre-order traversal:", bst.preOrder());
console.log("Post-order traversal:", bst.postOrder());

console.log("\nSearch for 40:", bst.search(40));
console.log("Search for 100:", bst.search(100));

console.log("\nMin value:", bst.findMin());
console.log("Max value:", bst.findMax());

console.log("\nHeight of tree:", bst.height());
console.log("Is balanced:", bst.isBalanced());

// Delete a node
bst.delete(30);
console.log("\nAfter deleting 30:", bst.inOrder());

// Insert more values
bst.insert(25);
bst.insert(35);
console.log("After inserting 25 and 35:", bst.inOrder());