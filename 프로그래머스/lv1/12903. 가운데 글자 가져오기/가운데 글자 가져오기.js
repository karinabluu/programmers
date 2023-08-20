function solution(s) {
    var answer = '';
    var Slen = s.length / 2;

    if (s.length % 2 === 0) {
        answer = s.slice(Slen -1, Slen +1)
    } else {answer = s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2 + 1))}


    return answer;
}