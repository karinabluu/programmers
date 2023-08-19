function solution(absolutes, signs) {
    var answer = 0;

    for (var i = 0; i < absolutes.length; i++) {
        var x = absolutes[i];
        var y = -absolutes[i];

        if (signs[i] === true) {
            answer += x;
        } else {
            answer += y;
        }
    }

    return answer;
}