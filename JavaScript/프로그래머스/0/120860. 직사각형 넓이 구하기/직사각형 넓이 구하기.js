function solution(dots) {
    let a = 0; // 가로
    let b = 0; // 세로
    
    for(let i=0;i<dots.length;i++){
        let x1 = dots[i][0];
        let y1 = dots[i][1];
        
        for(let j=i+1;j<dots.length;j++){
            let x2 = dots[j][0];
            let y2 = dots[j][1];
            
            if (x1 === x2){
                b = Math.abs(y1-y2);
            }
            if (y1 === y2){
                a = Math.abs(x1-x2);
            }
        }
    }
    return a*b;
}