function solution(n) {
    let arr = String(n).split("");
    let result = [];
    
    for(let i=0;i<arr.length;i++){
        result.push(Number(arr[i]));
    }
    
    return result.reverse();
}