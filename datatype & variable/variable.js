var score; // 변수의 선언
score = 80; // 값의 할당
score = 90; // 값의 재할당
score;      // 변수의 참조

// 변수의 선언과 할당
var average = (50 + 100) / 2;

var PI = 3.141592653589793; // 상수(형식상 대문자로)
var radius = 2; // 변수
var circleArea = PI * radius * radius;
var cylinderHeight = 5;
var cylinderVolume = circleArea * cylinderHeight;

// 값을 할당하지 않은 변수 즉 선언만 되어 있는 변수는 undefined로 초기값을 갖는다. 
// 선언하지 않은 변수에 접근하면 ReferenceError가 발생한다.
var x;
console.log(x); // undefined
console.log(y); // ReferenceError

// 변수의 중복 선언은 문법적으로 허용되지만 사용하지 않는 것이 좋다.
var x = 1;
console.log(x); // 1

// 변수의 중복 선언
var x = 100;
console.log(x); // 100