function solution(keyinput, board) {
    let xMax = Math.floor(board[0] / 2);
    let yMax = Math.floor(board[1] / 2);
    
    let x = 0;
    let y = 0;
    
    for (let key of keyinput){
        if (key === "left"){
           if(x > -xMax) x -= 1;
        }
        if(key === "right"){
            if(x < xMax)x += 1;
        }
        if(key === "up"){
            if(y < yMax)y += 1;
        }
        if (key === "down"){
            if(y > -yMax)y -= 1;
        }
    }
    return [x, y];
}