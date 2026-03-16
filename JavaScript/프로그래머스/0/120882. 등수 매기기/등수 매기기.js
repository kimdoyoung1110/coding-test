function solution(score) {
    let avg = score.map(v => (v[0]+v[1])/2);
    let avg_sorted = [...avg].sort((a,b)=>b-a); // 내림차순 정리
    let result = avg.map(v => avg_sorted.indexOf(v) + 1); // 해당 점수 인덱스 찾아서 +1
    return result;
}