// tmp와 갈아끼울 score
function alter(tmp, score){
    let s = [];
    for(let i=1;i<tmp.length;i++){
        s.push(tmp[i]);
    }
    s.push(score);
    return s;
}
function solution(k, score) {
    let result = [];
    let tmp = [];
    
    for(let i=0;i<score.length;i++){
        // k보다 작은 일차
        if(tmp.length < k){
            tmp.push(score[i]);
        }
        // 
        else{
            if(tmp[0] < score[i]){
                // tmp 배열 바꾸기
                tmp = alter(tmp, score[i]);
            }
        }
        // 정렬
        tmp.sort((a,b)=>a-b);
        result.push(tmp[0]);
    }
    return result;
}