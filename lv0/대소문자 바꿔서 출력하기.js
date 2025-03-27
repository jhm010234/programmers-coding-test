const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];

  // 원래는 const로 정의.
  // const는 한번 정의되면 변경이 힘들기 때문에
  // let로 수정
  let a = "";

  for (i = 0; i < str.length; i++) {
    let alphabet = str[i];

    if (alphabet === alphabet.toUpperCase()) {
      // 원래 작성한 코드는 a.push(alphabet.toLowerCase());
      // a를 문자열로 선언했는데
      // 배열에 사용되는 .push()를 사용했기 때문에
      // 실행 안됨
      a += alphabet.toLowerCase();
    } else {
      a += alphabet.toUpperCase();
    }
  }
  console.log(a);
});
