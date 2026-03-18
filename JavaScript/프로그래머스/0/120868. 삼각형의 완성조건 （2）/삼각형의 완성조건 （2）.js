function solution(sides) {
    let count = 0;
    const max = Math.max(...sides);
    const sum = sides[0]+sides[1];
    
    // num이 최대일때
    for(let num = max+1;num < sum;num++){
        count++;
    }
    // 기존 값 중 최대가 있을때
    for(let num=1;num<=max;num++){
        if (num+Math.min(...sides)>max)
            count++;
    }
    return count;
}