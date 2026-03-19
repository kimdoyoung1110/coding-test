function solution(my_string) {
    let num = "";
    let result = 0;
    const arr = my_string.split("");
    
    for(let i=0;i<arr.length;i++){
        if(!isNaN(arr[i])){
            num += arr[i];
        }
        else {
            result += Number(num);
            num = "";
        }
    }
    // 중요: 마지막 숫자 처리
    if (num != ""){
        result += Number(num);
    }
    return result;
}