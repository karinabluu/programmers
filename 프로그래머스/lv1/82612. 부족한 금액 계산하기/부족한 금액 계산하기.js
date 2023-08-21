function solution(price, money, count) {
    var TotalCount = (1 + count) * count /2; // TotalCount 의 정의
    var num = money - (price * TotalCount);


    if (num >= 0) { 
        return 0;
    } else {return -num;}
}