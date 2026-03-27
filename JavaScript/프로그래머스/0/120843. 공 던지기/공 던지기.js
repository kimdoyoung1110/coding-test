function solution(numbers, k) {
    let count = 1;
    let i = 0;
    
    while (count < k) {
        i+=2
        i %= numbers.length;
        count++;
    }
    return numbers[i];
}