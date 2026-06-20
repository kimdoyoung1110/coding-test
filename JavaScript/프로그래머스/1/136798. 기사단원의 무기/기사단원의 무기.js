function solution(number, limit, power) {
    const divisors = new Array(number+1).fill(0);
    
    // 각 숫자의 배수들에 약수 개수 1씩 더해주기
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            divisors[j]++;
        }
    }
    
    let result = 0;
    
    // 1부터 number까지 돌며 조건에 맞춰 합산
    for (let i = 1; i <= number; i++) {
        if (divisors[i] > limit) {
            result += power;
        } else {
            result += divisors[i];
        }
    }
    
    return result;
}

/*
numbers의 약수 개수 = 공격력
ex. 15면 -> 약수 개수 4개 -> 공격력=4, 근데 limit가 4보다 작으면, power=공격력이 됨.
*/