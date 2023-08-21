function solution(a, b) {
    var answer = 0;
    var n = a.length;

    for (var i = 0; i < n; i++) {
        
            answer += a[i] * b[i];
        
     
    }
    return answer;
}