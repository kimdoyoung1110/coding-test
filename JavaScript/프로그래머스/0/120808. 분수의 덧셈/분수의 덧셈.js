function gcd(a,b){
    if(b==0) return a;
    return gcd(b,a%b);
}

function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1*denom2;
    let numer = numer1*(denom/denom1)+numer2*(denom/denom2);
    
    let y = denom / gcd(denom, numer);
    let x = numer / gcd(denom, numer);
    
    return [x,y];
}