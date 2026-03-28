function solution(rsp) {
    let result = "";
    
    for(let ch of rsp){
        if (ch === "2"){
            result += "0";
        }
        if (ch === "0"){
            result += "5";
        }
        if (ch === "5"){
            result += "2";
        }
    }
    return result;
}