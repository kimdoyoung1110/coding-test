function solution(array) {
    let countArr = [];
    let count = 1;
    let arr = array.sort((a,b) => a-b);
    let temp = arr[0];
    
    for(let i=1;i<arr.length;i++){
        if (temp === arr[i]){
            count++;
        }
        else {
            countArr.push([temp, count]);
            temp = arr[i]
            count = 1;
        }
    }
    
    // 마지막 처리
    countArr.push([temp, count]);
    
    let max = 0;
    let result = 0;
    let isMany = false;
    
    for(let [num, ct] of countArr){
        if (ct > max){
            max = ct;
            result = num;
            isMany = false;
        }
        else if(ct === max){
            isMany = true;
        }
    }
    
    return isMany ? -1:result;
}