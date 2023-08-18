function solution(n) {
    var answer = 0;

    while (n > 0) {
        answer += n % 10; // answer 값에 일의 자리수를 더함
        n = Math.floor(n / 10)
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log('Hello Javascript')

    return answer;
}