// 두 정수 left와 right가 매개변수로 주어집니다. 
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
// 1 ≤ left ≤ right ≤ 1,000

// 약수의 개수 구하기
function leftright(n) {
    var count = 0;

    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    return count;
}

// 약수의 값에 따른 결과값
function solution(left, right) {
    var answer = 0;

    for (var n = left; n <= right; n++) {

        if (leftright(n) % 2 === 0) {
            answer += n;
        } else {
            answer -= n;
        }
    }

    return answer;
}