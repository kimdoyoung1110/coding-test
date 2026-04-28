function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for(let [w,h] of sizes){
        let big = Math.max(w,h);
        let small = Math.min(w,h);
        
        maxWidth = Math.max(maxWidth, big);
        maxHeight = Math.max(maxHeight, small);
    }
    return maxWidth * maxHeight;
}