// 논리 연산자

// 논리합(||) 연산자
true || true   // true
true || false  // true
false || true  // true
false || false // false

// 논리곱(&&) 연산자
true && true   // true
true && false  // false
false && true  // false
false && false // false

// 논리 부정(!) 연산자
!true  // false
!false // true

// 암묵적 타입 변환
!0 // true

// 단축 평가
'Cat' && 'Dog' // "Dog"

// 쉼표 연산자
// 쉼표(,) 연산자는 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 
// 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환한다.
var x, y, z;
x = 1, y = 2, z = 3; // 3

// 그룹 연산자
10 * 2 + 3 // 23
10 * (2 + 3) // 50


