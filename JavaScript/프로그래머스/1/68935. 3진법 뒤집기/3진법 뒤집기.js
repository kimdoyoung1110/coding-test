function solution(n) {
    let result = 0;
    let arr = [];
    const quotient = [0, 1, 2];
    
    while(!quotient.includes(n)){
        arr.push(Math.floor(n%3));
        n = Math.floor(n/3);
    }
    arr.push(n%3); // 마지막 처리
    
    let reversed_arr = arr.reverse();
    
    for(let i=0;i<reversed_arr.length;i++){
        result += reversed_arr[i]*(3)**i;
    }
    
    return result;
}

/*
1. n을 3으로 나눈 나머지 배열(arr) 저장
2. arr 뒤집고 요소*(3)**인덱스 result에 저장
3. result 리턴
*/