// 산술연산자
var area = 5 * 4; // 20

// 문자열 연결 연산자
var str = 'My name is ' + 'Lee'; // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
var foo = 3 > 5; // false

// 논리 연산자
var bar = (5 > 3) && (2 < 4); // true

// 타입 연산자
var type = typeof 'Hi'; // "string"

// 인스턴스 생성자
var today = new Date(); // Sat Dec 01 2018 00:57:19 GMT+0900 (한국 표준시)

// 피연산자의 타입은 반드시 일치할 필요는 없다. 암묵적 타입 강제 변환을 통해 연산을 수행한다.
var foo = 1 + '10'; // '110'
var bar = 1 * '10'; // 10