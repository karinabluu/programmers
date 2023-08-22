function solution(n, m) {
    function gcd(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    const lcm = (n * m) / gcd(n, m);

    return [gcd(n, m), lcm];
}