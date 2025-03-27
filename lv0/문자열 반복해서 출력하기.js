const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);
  for (i = 0; i < n; i++) {
    // 줄바꿈 없이 출력 (공백 없이 이어서 출력할 때 좋음)
    // node.js에서만 사용 가능
    process.stdout.write(str);
  }
});
