function solution(array, commands) {
  var answer = [];

  for (var idx = 0; idx < commands.length; idx++) {
    var [i, j, k] = commands[idx];

    var slicedArray = array.slice(i - 1, j);

    var sortedArray = slicedArray.slice().sort(function (a, b) {
      return a - b;
    });

    var end = sortedArray[k - 1];

    answer.push(end);
  }

  return answer;
}
