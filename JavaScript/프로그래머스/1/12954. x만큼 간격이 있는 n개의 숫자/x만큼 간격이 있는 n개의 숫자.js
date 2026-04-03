function solution(x, n) {
    let result = [];
    let count = 0;
    
    while (count != n){
        count++;
        result.push(count*x);
    }
    
    return result;
}