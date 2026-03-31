function solution(money) {
    let result = money;
    result /= 5500;
    let have = money - 5500*Math.floor(result);
    
    return [Math.floor(result), have]
}