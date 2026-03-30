function solution(my_string, letter) {
    let arr = my_string.split("");
    let result = "";
    
    for (let ch of arr){
        if (ch !== letter){
            result += ch;
        }    
    }
    return result;
}