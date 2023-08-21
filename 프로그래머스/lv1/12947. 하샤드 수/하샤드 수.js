function solution(x) {
    var answer = "";
    var originalX = x;
    var answer1 = 0;

    while (x > 0) {
        answer1 += x % 10;
        x = Math.floor(x / 10);
    }

    if (originalX / answer1 === Math.floor(originalX / answer1)) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}