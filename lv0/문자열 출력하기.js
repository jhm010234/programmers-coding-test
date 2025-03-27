// readline 모듈을 불러오기
// 브라우저에서는 prompt() 같은 걸로 사용자 입력을
// 받을 수 있지만, Node.js에서는 브라우저가 없으니
//  readline 같은 모듈로 콘솔 입력을 받음
const readline = require("readline");

// rl이라는 인터페이스를 만들어서 stdin(표준 입력)을 받을 준비
const rl = readline.createInterface({
  input: process.stdin, // 키보드 입력
  output: process.stdout, // 콘솔 출력
});

let input = [];

// rl.on('line', callback)는 한 줄 입력 받을 때마다 실행되는 함수로
// 입력이 들어올 때마다 호출.
// 여러 줄 받을 땐 여러 번 호출됨

// rl.on('close', callback)은 입력이 끝났을 때 실행되는 함수
rl.on("line", function (line) {
  // 배열에 하나만 담는 구조
  input = [line];
}).on("close", function () {
  str = input[0];
  console.log(str);
});
