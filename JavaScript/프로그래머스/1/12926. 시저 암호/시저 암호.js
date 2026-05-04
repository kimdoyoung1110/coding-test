function solution(s, n) {
    let result = [];
    
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(char === " "){
            result.push(" ");
            continue;
        }
        let code = char.charCodeAt(0);
        
        if(code >= 65 && code <= 90){
            let next = (code - 65 + n) % 26 + 65;
            result.push(String.fromCharCode(next));
        }
        else if(code >= 97 && code <= 122){
            let next = (code - 97 + n) % 26 + 97;
            result.push(String.fromCharCode(next));
        }
    }
    return result.join("");
}

/*
n까지 for문 돌리면서 89, 121번째가 넘어가면 처음으로 a로 돌아가고 result에 넣고 나머지도 넣고
(현재위치 + 이동값) % 26
*/