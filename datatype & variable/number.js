// number 타입의 값들
var integer = 10;        // 정수
var double = 10.12;      // 실수
var negative = -20;      // 음의 정수
var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

// 자바스크립트는 모든 진수를 전부 10진수로 해석한다.
console.log(binary);  // 65
console.log(octal);   // 65
console.log(hex);     // 65

// 표기법만 다를뿐 같은 값이다.
console.log(binary == octal); // true
console.log(octal == hex);    // true

// 자바스크립트는 정수만을 위한 타입이 없고 모든 수를 실수 처리한다.
console.log(1 == 1.0); // true

var result = 4 / 2;
console.log(result); // 2
result = 3 / 2;
console.log(result); // 1.5

// 특별한 값 표현
var pInf = 10 / 0;  // 양의 무한대
console.log(pInf);  // Infinity

var nInf = 10 / -0; // 음의 무한대
console.log(nInf);  // -Infinity

var nan = 1 * 'string'; // 산술 연산 불가
console.log(nan);       // NaN