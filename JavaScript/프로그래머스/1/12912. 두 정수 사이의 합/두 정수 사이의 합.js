function solution(a, b) {
    let result = 0;
    let arr = [a,b].sort((x,y)=>x-y);
    
    for(let i=arr[0];i<=arr[1];i++){
        result += i
    }
    
    return result;
}