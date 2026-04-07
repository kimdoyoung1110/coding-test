function solution(arr) {
    if(arr.length===1){
        return [-1];
    }
    // 가장 작은 원소 저장
    let temp = Math.min(...arr);
    // 가장 작은 원소의 인덱스 저장
    let idx = arr.indexOf(temp);
    // splice(제거할 원소의 인덱스, 개수)
    arr.splice(idx, 1);
    return arr;
}