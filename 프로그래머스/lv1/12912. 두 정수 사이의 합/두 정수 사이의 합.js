function solution(a, b) {
    var answer = 0;

    if (a === b) {
        answer = a;
    } else {
        if (a > b) {
            [a, b] = [b, a]; // a와 b를 오름차순으로 정렬
        }

        for (var i = a; i <= b; i++) {
            answer += i;
        }
    }

    return answer;
}



