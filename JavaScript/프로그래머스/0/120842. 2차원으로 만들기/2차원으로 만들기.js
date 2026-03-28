function solution(num_list, n) {
    let result = [];
    let temp = [];
    
    for (let i=0;i<num_list.length;i++){
        if (temp.length === n){
            result.push(temp);
            temp = [];
        }
        temp.push(num_list[i]);
    }
    result.push(temp);
    return result;
}