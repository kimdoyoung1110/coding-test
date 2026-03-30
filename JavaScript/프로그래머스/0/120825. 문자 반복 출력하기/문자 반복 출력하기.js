function solution(my_string, n) {
    let result = "";
    let arr = my_string.split("");
    
    for (let i=0;i<arr.length;i++){
        result += arr[i].repeat(n);
    }
    
    return result;
}