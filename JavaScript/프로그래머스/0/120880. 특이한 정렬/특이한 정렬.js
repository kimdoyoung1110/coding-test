function solution(numlist, n) {
    let result = numlist.sort((a,b)=>{
        let diffA = Math.abs(n-a);
        let diffB = Math.abs(n-b);
        
        if (diffA === diffB){
            return b-a; // a,b 중 더 큰 값을 먼저 리턴 (내림차순 정리)
        }
        else {
            return diffA - diffB; // 오름차순 정리
        }
    });
    
    return result;
}