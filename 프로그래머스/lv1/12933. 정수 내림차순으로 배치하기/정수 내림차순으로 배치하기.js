function solution(n) {
    // 숫자를 문자열로 변환하여 각 자릿수를 배열에 저장
    var digits = n.toString().split('');

    // 내림차순으로 정렬
    digits.sort(function(a, b) {
        return b - a;
    });

    // 정렬된 자릿수 배열을 하나의 정수로 변환
    answer = parseInt(digits.join(''));

    return answer;
}