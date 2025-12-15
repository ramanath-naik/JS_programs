function TreeNode(val){
    this.val=val;
    this.left=null;
    this.right=null;
}

function buildTree(arr){
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i=1;
    while(i<arr.length){
        let current = queue.shift();

        if(arr[i] !== null && arr[i] !== undefined){
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if(i<arr.length && arr[i] !== null && arr[i] !== undefined){
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }
    return root;
}

function rightSideView(root){
    if(!root) return [];

    let result=[];
    let q = [root];
    while(q.length){
        let size = q.length;
        let lastValue=null;

        for(let i=0; i<size; i++){
            let node = q.shift();
            lastValue=node.val;

            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        result.push(lastValue);
    }
    return result;

}

let arr = [1,2,3,null,5,null,4];
console.log(buildTree(arr));
let root1 = buildTree(arr);
console.log("right Side view",rightSideView(root1));
