function solution(chicken) {
    let coupon = chicken;
    let count = 0;
    while (coupon >= 10) {
        coupon /= 10
        count += coupon;
    }
    return Math.round(count)
}