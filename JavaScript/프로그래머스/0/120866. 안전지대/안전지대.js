function solution(board) {
    // 빈 board 생성
    let empty = new Array(board.length);
    for(let i=0;i<board.length;i++){
        empty[i] = new Array(board.length).fill(0);
    }
    
    // 방향 배열
    let dx = [-1,-1,-1,0,0,0,1,1,1];
    let dy = [-1,0,1,-1,0,1,-1,0,1];
    
    // 폭탄 유무 체크 -> 1 추가
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if (board[i][j] === 1){
                empty[i][j] = 1; // 폭탄 표시
                
                // 주변영역 표시
                for(let k=0;k<dx.length;k++){
                    let nx = i+dx[k];
                    let ny = j+dy[k];
                    
                    // 인덱스 음수, 범위 벗어난 것 제외
                    if(nx>=0 && ny>=0 && nx<board.length && ny<board.length){
                        empty[nx][ny] = 1;
                    }
                }
            }
        }
    }
    
    // 안전지역 세기
    let count = 0;
    for (let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if (empty[i][j]===0)
                count += 1;
        }
    }
    return count;
}