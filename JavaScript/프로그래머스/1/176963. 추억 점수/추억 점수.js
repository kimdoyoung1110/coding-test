function solution(name, yearning, photo) {
    let result = [];
    
    for(let i=0;i<photo.length;i++){
        // 점수 찾기
        let tmp = 0
        for(let j=0;j<photo[i].length;j++){
            for(let k=0;k<name.length;k++){
                if(name[k] === photo[i][j]){
                    tmp += yearning[k];
                }
            }
        }
        result.push(tmp);
    }
    
    return result;
}