const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  // !@#$%^&*(\'"<>?:;
  // 이스케이프 문자 (\) -> \\로 작성해야 \로 출력
  // 작은 따옴표(') -> \'
  // 큰 따옴표("") -> \"
  console.log("!@#$%^&*(\\'\"<>?:;");
});
