function solution(s) { //hellod world
    var words = s.split(' '); // 공백을 기준으로 단어들을 나눕니다.
    var answer = '';

    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            if (j % 2 === 0) { // 짝수 인덱스면 대문자로
                answer += words[i][j].toUpperCase();
            } else { // 홀수 인덱스면 소문자로
                answer += words[i][j].toLowerCase();
            }
        }
        if (i < words.length - 1) {
            answer += ' '; // 단어 사이에 공백 추가
        }
    }

    return answer;
}