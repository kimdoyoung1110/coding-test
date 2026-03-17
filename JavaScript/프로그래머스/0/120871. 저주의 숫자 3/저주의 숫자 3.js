function solution(n) {
    let count = 0;
    let num = 0;
    while(count < n){
        num += 1;
        
        while (num%3===0 || num.toString().includes('3'))
            num += 1;
        
        count += 1;
    }
    
    return num;
}