function solution(d, budget) {
    let count = 0;
    
    // 정렬
    d.sort((a,b)=>a-b);
    
    // 하나씩 더하며 budget 확인
    for(const money of d){
        if(budget < money){
            break;
        }
        budget -= money;
        count++;
    }
    
    return count;
}

// 그리디