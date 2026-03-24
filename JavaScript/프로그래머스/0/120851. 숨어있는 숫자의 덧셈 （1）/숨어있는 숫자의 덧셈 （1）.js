function solution(my_string) {
    let result = 0;
    const arr = my_string.split("");
    for(let i=0;i<arr.length;i++){
        if (String(Number(arr[i])) == arr[i]){
            result+= Number(arr[i]);
        }
    }
    return result;
}