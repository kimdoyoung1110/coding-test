function solution(slice, n) {
    let num = slice;
    let count = 1;
    while (slice<n){
        slice += num;
        count++;
    }
    return count;
}