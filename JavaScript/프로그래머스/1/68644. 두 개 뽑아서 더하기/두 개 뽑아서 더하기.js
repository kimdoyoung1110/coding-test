function solution(numbers) {
    let tmp = [];
    
    
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            tmp.push(numbers[i]+numbers[j]);
        }
    }
    
    const result = [...new Set(tmp)];

    return result.sort((a,b)=>a-b);
}
/*
이중for문으로 더한 값 result 저장
result 중복 제거
result 오름차순 정렬
*/