function solution(strings, n) {
    
    for(let i=0;i<strings.length;i++){
        for(let j=0;j<strings.length-1;j++){
            if(strings[j][n] > strings[j+1][n]){
                let tmp = strings[j];
                strings[j] = strings[j+1];
                strings[j+1] = tmp;
            }
            else if(strings[j][n] === strings[j+1][n]){
                if(strings[j]>strings[j+1]){
                    let tmp = strings[j];
                    strings[j] = strings[j+1];
                    strings[j+1] = tmp;
                }
            }
        }
    }
    return strings;
}

/*
버블정렬 변형?

*/