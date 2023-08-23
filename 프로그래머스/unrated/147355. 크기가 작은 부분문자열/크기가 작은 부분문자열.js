function solution(t, p) {
    var answer = [];
    for (var i = 0; i <= t.length - p.length; i++) {
        answer.push(t.slice(i, i + p.length)); 
    }
    
    var answer1 = [];
    
    // 배열에 저장된 부분문자열과 p의 크기 비교
    for (var j = 0; j < answer.length; j++) { // tp -> answer로 수정
        if (answer[j] <= p) {
            answer1.push(answer[j]);
        } 
    }

    var result = answer1.length; // 결과 값을 저장

    return result; // 결과 값 반환
}

var t = "3141592";
var p = "271";
var result = solution(t, p);
console.log(result); // 결과 값 출력