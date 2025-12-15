function rectArea(heights){
    let max = 0;
    let stack=[];
    heights.push(0);

    for(let i=0; i<heights.length; i++){
        while (stack.length && heights[i]< heights[stack[stack.length -1]]){
            let h= heights[stack.pop()];
            let left = stack.length ? stack[stack.length -1] : -1;
            max = Math.max(max, h*(i-left-1));
        }
        stack.push(i);
    }
    return max;
}

let heights=[2,1,5,6,3,3];
console.log(rectArea(heights));