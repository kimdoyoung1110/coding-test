def solution(n, k):
    if (n/10 <= k):
        answer = n*12000 + 2000*k -2000*int(n/10)
    if (n/10 > k):
        answer = n*12000
     
    return answer