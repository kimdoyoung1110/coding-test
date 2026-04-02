function solution(n)
{
    let result = 0;
    let arr = String(n).split("");
    
    for(let i=0;i<arr.length;i++){
        result += Number(arr[i]);
    }
    
    return result;
}