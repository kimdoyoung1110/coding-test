function solution(s) {
    let str = s.split(" ");
    let temp = 0;
    
    for(let i=0;i<str.length;i++){
        if (str[i]==='Z'){
            temp -= Number(str[i-1]);
        }
        else{
            temp += Number(str[i]);
        }
    }
    
    return temp;
}