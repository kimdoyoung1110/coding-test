function solution(price, money, count) {
    // 이용료: price, 현재 자신의 금액: money, 놀이기구 탄 횟수: count
    // n번째 이용시 n배, count번 탔을때 모자라는지 아닌지, 아니라면 얼마가 모자른지
    let tmp = 0;
    
    for(let i=0;i<count;i++){
        tmp += price*(i+1);
    }
    
    if(tmp > money){
        return tmp-money;
    }
    return 0;
}