function solution(lines) {
    const arr = Array(200).fill(0);
    
    for (let i=0;i<lines.length;i++){
        let start = lines[i][0]+100;
        let end = lines[i][1]+100;
        for (let j = start;j < end;j++){
            arr[j] += 1;
        }
    }
    return arr.filter(v=>v>=2).length;
}