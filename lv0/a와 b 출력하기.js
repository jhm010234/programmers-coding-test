// readline 모듈을 불러오기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  // 공백을 기준으로 나눔
  input = line.split(" ");
}).on("close", function () {
  console.log(`a = ${input[0]}`);
  console.log(`b = ${input[1]}`);
  //console.log(Number(input[0]) + Number(input[1]));
});
