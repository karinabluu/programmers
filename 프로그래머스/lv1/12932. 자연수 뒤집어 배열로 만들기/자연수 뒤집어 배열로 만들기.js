function solution(n) {
    var answer = [];

    n = n.toString().split('')

    n.forEach((n) =>{
        answer.push(Number(n))
    })

    return answer.reverse();
}