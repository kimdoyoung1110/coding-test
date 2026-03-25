function solution(my_string) {
    const alpa = ['a','e','i','o','u'];
    let result = ""
    
    for(let ch of my_string){
        if(!alpa.includes(ch))
            result += ch
    }
    
    return result;
}