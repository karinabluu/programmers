function solution(x, n) {
    var answer = [];
    answer.push(x);
    for (let i = 0; i < n-1; i++){
        answer.push(x + answer[i]);
    }

    return answer;
}