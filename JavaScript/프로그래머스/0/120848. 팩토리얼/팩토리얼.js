function solution(n) {
    let temp = 1;
    for(let i=2;;i++){
        temp *= i;
        if (temp > n){
            return i-1;
        }
    }
}