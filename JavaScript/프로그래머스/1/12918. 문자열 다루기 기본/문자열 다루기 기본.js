function solution(s){
    // ^: 시작, $: 끝, [0-9]: 숫자, +: 1개 이상
    if(s.length !== 4 && s.length !== 6){
        return false;
    }
    return /^[0-9]+$/.test(s);
}


/* isNaN을 쓰면 공백 있는 것도 true를 내보냄.
function isNumeric(ch){
    return !isNaN(ch) && !isNaN(parseFloat(ch));
}

function solution(s) {
    for(let ch of s){
        if(!isNumeric(ch)){
            return false;
        }
    }
    return true;
}
*/