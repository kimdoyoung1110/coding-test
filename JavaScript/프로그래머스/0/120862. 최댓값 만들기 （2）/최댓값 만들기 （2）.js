function solution(numbers) {
    let result = numbers[0]*numbers[1];
    for (let i=0;i<numbers.length;i++){
        for (let j=i+1;j<numbers.length;j++){
            let temp = numbers[i]*numbers[j];
            if (result < temp){
                result = temp;
            }
        }
    }
    return result;
}