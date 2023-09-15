function solution(a, b) {
    var answer = '';

    // 2016년 1월 1일부터 a월 b일까지의 일수를 계산
    var days = 0;
    var months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 각 달의 일수 (윤년이므로 2월은 29일)
    
    for (var i = 0; i < a - 1; i++) {
        days += months[i];
    }
    days += b - 1;

    // 2016년 1월 1일은 금요일이므로, 금요일부터 시작하여 일수를 더하면 최종 요일을 구할 수 있음
    var weekDays = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    answer = weekDays[(days % 7)];

    return answer;
}