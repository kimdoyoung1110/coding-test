// 2진수로 만드는 함수
function toBinary(n, num){
    let result = [];
    while (num > 0){
        result.push(num%2);
        num = Math.floor(num/2);
    }
    while (result.length < n){
        result.push(0);
    }
    return result.reverse();
}

function solution(n, arr1, arr2) {
    let result = [];
    
    
    for(let i = 0;i<n;i++){
        let square = [];
        let tmp1 = toBinary(n, arr1[i]);
        let tmp2 = toBinary(n, arr2[i]);
        
        for(let j=0;j<tmp1.length;j++){
            if(tmp1[j] === 1 || tmp2[j] === 1){
                square.push("#");
            }
            else{
                square.push(" ");
            }
        }
        result.push(square.join(""));
    }
    
    return result;
    
    
}

/*
지도 정n각형, 칸은 공백, #으로 이루어짐.
전체지도는 지도 2개 합친거, # 하나라도 있으면 벽임. 모두 공백인거만 공백
x = 1, 공백 = 0
이진수로 되어 있음.

...
1. 이진수로 풀어쓰고
*/