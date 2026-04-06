function solution(s) {
    let arr = s.split("");
    let half = Math.floor(arr.length/2);
    
    if (arr.length%2===0){
        return arr.slice(half-1, half+1).join("");
    }
    return arr.slice(half,half+1).join("");
}