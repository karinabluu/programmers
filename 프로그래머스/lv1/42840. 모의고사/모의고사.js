function solution(answers) {
  var answer = [];
  var one = []; // one 배열 추가
  var two = []; // two 배열 추가
  var three = []; // three 배열 추가

  var patternOne = [1, 2, 3, 4, 5];
  var patternTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  var patternThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 각 패턴 배열을 answers의 길이만큼 반복해서 one, two, three 배열에 저장
  for (let i = 0; i < answers.length; i++) {
    one.push(patternOne[i % patternOne.length]);
    two.push(patternTwo[i % patternTwo.length]);
    three.push(patternThree[i % patternThree.length]);
  }

  // 각 수포자의 정답 개수 카운트
  var answerOne = 0;
  var answerTwo = 0;
  var answerThree = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i]) {
      answerOne++;
    }
    if (answers[i] === two[i]) {
      answerTwo++;
    }
    if (answers[i] === three[i]) {
      answerThree++;
    }
  }

  // 가장 많이 맞춘 사람을 찾아 answer 배열에 추가
  var maxScore = Math.max(answerOne, answerTwo, answerThree);

  if (maxScore === answerOne) {
    answer.push(1);
  }
  if (maxScore === answerTwo) {
    answer.push(2);
  }
  if (maxScore === answerThree) {
    answer.push(3);
  }

  return answer;
}
