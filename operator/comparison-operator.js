// 비교 연산자

// 동등 비교
5 == 5    // true
// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 같은 값을 같는다.
5 == '5'   //true
5 == 8    // false

// 일치 비교(===) 연산자는 좌항과 우항의 피연산자가 타입도 같고 
// 값도 같은 경우에 한하여 true를 반환한다.
// 보통 ==보다 ===이걸 사용하자
'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

// 이유
5 == '5'   // true
5 === '5'  // false