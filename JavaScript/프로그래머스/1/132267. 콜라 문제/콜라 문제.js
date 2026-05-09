function solution(a, b, n) {
    let result = 0;
    let tmp = n;
    let remainder = 0;
    
    while (!(remainder<a && tmp<a)){
        remainder = tmp%a;
        tmp = Math.floor(tmp/a);
        result += tmp * b;
        tmp = tmp * b + remainder;
    }
    return result;
}
/*
tmp = n / a 하고
remainder += n%a 저장하고 a가 넘어가면, 나눈 몫을 result에 더함. 나머지는 다시 remainder

*/