function solution(polynomial) {
    let arr = polynomial.split(" ");
    let result = "";
    let num = 0; // x 계수
    let num2 = 0; // 상수
    
    for (let i = 0;i<arr.length;i++){
        if (arr[i] === '+') continue;
        
        let temp = arr[i]
        
        if (temp.includes("x")){
            let value = temp.replace("x", "");
            num += value === "" ? 1 : Number(value);
        }
        else {
            num2 += Number(temp);
        }
    }
    let xPart = "";
    
    if (num === 1){
        xPart = "x";
    }
    else if(num > 1){
        xPart = num + "x";
    }
    
    if (num2 === 0)
        return xPart;
    if (num === 0)
        return String(num2);
    return xPart + " + " + num2;
}