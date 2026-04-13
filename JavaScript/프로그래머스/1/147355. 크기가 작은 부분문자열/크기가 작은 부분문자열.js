function solution(t, p) {
    // 부분 문자열 추출 뽑고 바로 p와 Number 비교 -> count++
    let count = 0;
    let arr = t.split("");
    
    for(let i = 0;i<arr.length;i++){
        let tmp = "";
        for(let j=i;j<p.length+i;j++){
            tmp += arr[j];
        }
        if(Number(tmp) <= Number(p)){
            count++;
        }
    }
    
    return count;
}