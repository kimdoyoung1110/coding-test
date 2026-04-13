function solution(arr)
{
    // 스택
    let stack = [arr[0]];
    let tmp = arr[0];
    
    // 중복 찾기
    for(let i=1;i<arr.length;i++){
        if (tmp != arr[i]){
            stack.push(arr[i])
            tmp = arr[i];
        }
    }
    
    return stack;
}