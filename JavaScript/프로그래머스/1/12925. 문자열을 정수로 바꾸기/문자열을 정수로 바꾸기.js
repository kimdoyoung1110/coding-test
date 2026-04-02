function solution(s) {
    // 1. s.split
    let arr = s.split("");
    let result = ""
    
    // 2. for문 돌면서 -면 인덱스 1부터 Number 치환 후 result 대입
    if(arr[0]==="-"){
        for(let i=1;i<arr.length;i++){
            result += arr[i];
        }
        return -Number(result);
    }
    else{
        return Number(s);
    }
    
}

