function solution(n) {
    var answer = 0;

    for (var x = 1; x <= n; x++) {
        if (n % x === 1) {
            return x;
}
        }
    }