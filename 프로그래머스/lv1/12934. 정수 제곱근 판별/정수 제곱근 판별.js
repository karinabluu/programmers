function solution(n) {
    var answer = 0;
    var guen = Math.sqrt(n);
    if (guen === Math.floor(guen)) {
        answer = Math.pow(guen + 1, 2);
    } else {
        answer = -1;
    }

    return answer;
}