function solution(s) {
    const list = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };
    let result = "";
    let tmp = "";
    
    for(let i=0;i<s.length;i++){
        // 숫자면 바로 result
        if(!isNaN(s[i])){
            result += s[i];
        }
        
        // 문자면 tmp 넣기
        else{
            tmp += s[i];
            // 넣었을때 tmp가 완성 되었을 경우
            if (tmp in list){
                result += list[tmp];
                tmp = "";
            }
        }
    }
    return Number(result);
}

/*
s 반복문 돌면서 tmp에 저장하고 숫자 나오거나 숫자-영단어 저장된 배열과 비교

*/