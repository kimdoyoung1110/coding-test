function solution(nums) {
    const uniqueNums = new Set(nums); // 종류수
    const len = nums.length/2; // 전체 개수
    
    if(uniqueNums.size > len)
        return len;
    else
        return uniqueNums.size;
}
/*
종류수(set 자료형 써서 배열 개수 파악)가 nums.length/2 보다 크면 return nums.length/2
아니면, return 종류수
*/