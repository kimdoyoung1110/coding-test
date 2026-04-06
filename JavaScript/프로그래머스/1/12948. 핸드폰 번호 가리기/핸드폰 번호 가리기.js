function solution(phone_number) {
    let result = "";
    let arr = phone_number.split("");
    
    for(let i=0;i<arr.length-4;i++){
        result += "*";
    }
    result += arr.slice(arr.length-4).join("");
    return result;
}