function solution(answers) {
    let result = [];
    
    const p1 = [1,2,3,4,5];
    const p2 = [2,1,2,3,2,4,2,5];
    const p3 = [3,3,1,1,2,2,4,4,5,5];
    
    const p1Len = p1.length;
    const p2Len = p2.length;
    const p3Len = p3.length;
    
    let count = [0, 0, 0];
    
    for(let i=0;i<answers.length;i++){
        if(answers[i] === p1[i%p1Len]){
            count[0] += 1;
        }
        if(answers[i] === p2[i%p2Len]){
            count[1] += 1;
        }
        if(answers[i] === p3[i%p3Len]){
            count[2] += 1;
        }
    }
    
    const maxScore = Math.max(...count);
    
    for(let i=0;i<count.length;i++){
        if(count[i] === maxScore){
            result.push(i+1);
        }
    }
    
    return result;
}
/*
1번: 1,2,3,4,5 순차적
2번: 2,1/2,3/2,4...
3번: 3,3/1,1/2,2/4,4...
*/