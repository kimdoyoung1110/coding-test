function solution(numbers) {
    let arr = [0,1,2,3,4,5,6,7,8,9];
    let result_arr = arr.filter(num => !numbers.includes(num));
    
    return result_arr.reduce((a,b)=>a+b,0);
}