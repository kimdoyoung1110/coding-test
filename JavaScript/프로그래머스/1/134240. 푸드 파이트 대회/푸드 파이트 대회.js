function solution(food) {
    let result = "";
    let tmp = "";
    
    for(let i=1;i<food.length;i++){
        if(food[i]%2===0){
            tmp += String(i).repeat(food[i]/2);
        }
        else{
            tmp += String(i).repeat(Math.floor(food[i]/2));
        }
    }
    let reversed_tmp = tmp.split("").reverse().join("");
    result += tmp + 0 + reversed_tmp;
    return result;
}
/*
1번 - 3개
2번 - 4개
3번 - 6개
물 - 0번
food[1]부터 for문 돌아서 짝수면 절반 개수를 해당 인덱스 값으로 넣음.
홀수면 몫만큼만 넣으면 됨.
마지막에 reverse한거랑 합한 값 리턴하면 됨.
*/