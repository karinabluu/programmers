function solution(numbers) {
    const plus = new Set(); // 중복된 수를 제거하기 위해 Set을 사용합니다.
  
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) { // 서로 다른 인덱스의 수를 선택해야 합니다.
        plus.add(numbers[i] + numbers[j]);
      }
    }
  
    const answerArray = Array.from(plus).sort((a, b) => a - b);
  
    return answerArray;
  }