function solution(phone_number) {
    var answer = '';
    var pnum = phone_number.slice(-4); // 뒷 4자리 번호
    var pnum1 = phone_number.slice(0, -4); // 뒷 4자리 번호를 제외한 부분

    for (var i = 0; i < pnum1.length; i++) {
        answer += '*';
    }

    answer += pnum; // 가려지지 않은 뒷 4자리를 추가
    
    return answer;
}