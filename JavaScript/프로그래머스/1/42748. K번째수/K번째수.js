function solution(array, commands) {
    let result = [];
    
    
    for(let i=0;i<commands.length;i++){
        let tmp = [];
        let x = commands[i][0];
        let y = commands[i][1];
        let k = commands[i][2];
        
        for(let j = x;j<=y;j++){
            tmp.push(array[j-1]);
        }
        
        result.push(tmp.sort((a,b)=>a-b)[k-1]);

    }
    
    return result;
}
/*
슬라이싱
정렬
k번째 값 배열 저장
*/