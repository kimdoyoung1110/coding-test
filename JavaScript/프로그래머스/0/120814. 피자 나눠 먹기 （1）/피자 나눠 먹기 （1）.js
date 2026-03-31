function solution(n) {
    let pizza = 7;
    let count = 1;
    
    while(pizza<n){
        count++;
        pizza += 7;
    }
    return count;
}