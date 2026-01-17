// for문
/*
for (초기화식; 조건식; 증감식) {
  조건식이 참인 경우 반복 실행될 문;
}
 */

for (var i = 0; i < 2; i++) {
    console.log(i);
}

// 무한루프
// for (;;) {}

for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
        if (i + j === 6) console.log(`[${i}, ${j}]`);
    }
}


// while 문

var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
    console.log(count);
    count++;
}  // 0 1 2

// 조건식의 평가가 언제나 참이면 무한루프
// while (true) {}

var count = 0;

// 무한루프
while (true) {
    console.log(count);
    count++;
    // count가 3이면 코드 블록을 탈출한다.
    if (count === 3) break;
} // 0 1 2


// do - while 문
// do…while 문은 코드 블록을 실행하고 조건식을 평가한다. 
// 따라서 코드 블록은 무조건 한번 이상 실행된다.

var count = 0;

do {
    console.log(count);
    count++;
} while (count < 3); // 0 1 2


// 레이블 문(Label statement)이란 식별자가 붙은 문을 말한다.
foo: console.log('foo');

// 레이블 문은 프로그램의 실행 순서를 제어하기 위해 사용한다. 
// 사실 switch 문의 case 문과 default 문도 레이블 문이다. 
// 레이블 문을 탈출하려면 break 문에 레이블 식별자를 지정한다.

foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}
console.log('Done!');

// 중첩된 for 문의 내부 for 문에서 break 문을 실행하면 
// 내부 for 문을 탈출하여 외부 for 문으로 진입한다. 
// 이때 내부 for 문이 아닌 외부 for 문을 탈출하려면 
// 레이블 문을 사용한다.

// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 외부 for 문을 탈출한다.
    if (i + j === 3) break outer;
  }
}

console.log('Done!');

