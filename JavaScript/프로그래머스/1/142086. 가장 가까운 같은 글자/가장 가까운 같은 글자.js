function solution(s) {
    let result = [];
    let lastIndex = {}; // 마지막 인덱스 저장 객체 생성
    
    for(let i=0;i<s.length;i++){
        let ch = s[i];
        
        if (lastIndex[ch] === undefined){
            result.push(-1);
        }
        else{
            result.push(i-lastIndex[ch]);
        }
        lastIndex[ch] = i;
    }
    
    return result;
}

/*
s 돌면서 새로운 newS에 저장
newS에 없는 거라면 result에 -1
있는거라면 newS 뒤에서부터 돌면서 해당 문자가 나오는 루프 도는 횟수를 result에 저장
-> 마지막 위치를 저장해두기
*/