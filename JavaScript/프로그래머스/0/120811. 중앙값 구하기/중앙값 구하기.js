function solution(array) {
    let arr = array.sort((a,b)=>a-b);
    return arr[Math.floor(array.length / 2)];
}