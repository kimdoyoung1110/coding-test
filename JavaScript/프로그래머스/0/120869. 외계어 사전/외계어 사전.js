function solution(spell, dic) {
    const spellStr = spell.sort().join(""); // spell 정렬 -> 문자열
    
    for(let word of dic){
        let words = word.split("").sort().join(""); // spell 문자 분리->정렬->문자열
        if (spellStr === words)
            return 1;
    }
    return 2;
}