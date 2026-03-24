function solution(my_string) {
    let result = [];
    for(let num of my_string){
        if(!isNaN(num)){
            result.push(Number(num))
        }
    }
    return result.sort()
}