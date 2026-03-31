function solution(array, height) {
    let count = 0;
    
    for(let num of array){
        if(height<num){
            count++;
        }
    }
    return count;
}