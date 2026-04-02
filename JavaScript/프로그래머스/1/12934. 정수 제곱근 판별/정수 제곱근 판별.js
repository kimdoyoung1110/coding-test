function solution(n) {
    // 1. x의 제곱인지 판별
     // 2. x+1의 제곱 리턴 or -1 리턴
    let num = Math.sqrt(n);
    if (Number.isInteger(num)){
        return (num+1)**2;
    }
    else{
        return -1;
    }
   
}