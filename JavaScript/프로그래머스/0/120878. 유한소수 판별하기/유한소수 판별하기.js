function GCD(a, b){
    return b === 0 ? a:GCD(b, a%b);
}

function solution(a, b) {
    let result = [];
    let temp = b/GCD(a,b);
    
    while (temp % 2 === 0) temp /= 2;
    while (temp % 5 === 0) temp /= 5;
    
    return temp === 1 ? 1:2;
}