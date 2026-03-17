function solution(n) {
    const arr = Array.from({length:n}, ()=>Array(n).fill(0)); // 0 배열 만들기
    
    const moveX = [0,1,0,-1];
    const moveY = [1,0,-1,0];
    
    let x = 0;
    let y = 0;
    let button = 0; // 0:오른쪽, 1:아래, 2:왼쪽, 3:위
    
    for(let i=1;i <= n*n;i++){
        arr[x][y] = i;
        
        // 다음 칸 확인
        let nextX = x+moveX[button];
        let nextY = y+moveY[button];
        
        // 다음 칸이 벽 막혔거나(인덱스가 음수거나 n보다 큰 경우) 값이 채워진 경우
        if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= n|| arr[nextX][nextY] !== 0){
            button = (button + 1) % 4; // 방향전환 0123 -> 4로 나눈 나머지를 이용해서 루프
            
            // 다시 채워주기
            nextX = x+moveX[button];
            nextY = y+moveY[button];
        }
        // 현재 값으로 초기화
        x = nextX;
        y = nextY;
    }
    return arr
}