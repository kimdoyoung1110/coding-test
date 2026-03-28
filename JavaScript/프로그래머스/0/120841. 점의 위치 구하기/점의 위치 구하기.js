function solution(dot) {
    const x = dot[0];
    const y = dot[1];
    
    if (x*y>0){
        if (x<0){
            return 3;
        }
        if (x>0){
            return 1;
        }
    }
    if (x*y<0){
        if (x<0){
            return 2;
        }
        if (x>0){
            return 4;
        }
    }
}