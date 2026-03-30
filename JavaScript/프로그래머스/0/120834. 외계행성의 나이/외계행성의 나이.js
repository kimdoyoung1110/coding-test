function solution(age) {
    const alpha = ['a','b','c','d','e','f','g','h','i','j'];
    const arr = String(age).split("");
    let result = "";
    
    for(let i=0;i<arr.length;i++){
        let idx = Number(arr[i]);
        result += alpha[idx];
    }
    
    return result;
}