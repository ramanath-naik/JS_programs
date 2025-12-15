var find132pattern = function(nums) {
    let stack = [];
    let mid = -Infinity; 
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < mid) return true;

        while (stack.length && nums[i] > stack[stack.length - 1]) {
            mid = stack.pop();
        }
        stack.push(nums[i]);
    }
    return false;
};

let nums=[-1, 1, 3, 2, 4]
console.log(find132pattern(nums));
//So right → left is always faster for conditions involving i < j < k.



var largestRectangleArea = function(heights) {
    let stack = [];
    let max = 0;
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()];
            let left = stack.length ? stack[stack.length - 1] : -1;
            max = Math.max(max, h * (i - left - 1));
        }
        stack.push(i);
    }
    return max;
};

let heights=[2,  1 , 5,  6,  2,  3]
console.log(largestRectangleArea(heights));




// TreeNode structure
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// Build binary tree from level-order array
function buildTree(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();

        // left child
        if (arr[i] !== null && arr[i] !== undefined) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        // right child
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

// Right side view
var rightSideView = function(root) {
    if (!root) return [];

    let q = [root];
    console.log("root############", root);
    console.log("q**************", q);
    let result = [];

    while (q.length) {
        let size = q.length;
        let lastValue = null;

        for (let i = 0; i < size; i++) {
            let node = q.shift();
            lastValue = node.val;

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        result.push(lastValue); 
    }

    return result;
};


let arr = [1, 2, 3, null, 5, null, 4];
let root = buildTree(arr);
// console.log(root);

console.log(rightSideView(root));

