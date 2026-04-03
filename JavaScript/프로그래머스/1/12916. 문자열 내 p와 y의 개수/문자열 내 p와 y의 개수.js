function solution(s){
    let arr = s.toLowerCase().split("");
    let count_p = 0;
    let count_y = 0;
    
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==="p"){
            count_p += 1;
        }
        else if(arr[i]==="y"){
            count_y += 1;
        }
    }
    
    return count_p === count_y ? true : false;
}