function solution(numbers) {
    var answer = 45; // 0부터 9까지의 숫자의 합
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    answer -= sum;

    return answer;
}