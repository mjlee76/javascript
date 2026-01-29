// 문자열 타입이 아닌 값을 문자열 타입으로 변환하는 방법은 
// 아래와 같다.

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 2. Object.prototype.toString 메소드를 사용하는 방법
// 3. 문자열 연결 연산자를 이용하는 방법


// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1));        // "1"
console.log(String(NaN));      // "NaN"
console.log(String(Infinity)); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(String(true));     // "true"
console.log(String(false));    // "false"

// 2. Object.prototype.toString 메소드를 사용하는 방법
// 숫자 타입 => 문자열 타입
console.log((1).toString());        // "1"
console.log((NaN).toString());      // "NaN"
console.log((Infinity).toString()); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log((true).toString());     // "true"
console.log((false).toString());    // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
console.log(1 + '');        // "1"
console.log(NaN + '');      // "NaN"
console.log(Infinity + ''); // "Infinity"
// 불리언 타입 => 문자열 타입
console.log(true + '');     // "true"
console.log(false + '');    // "false"





// 숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법은 아래와 같다.

// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 3. 단항 연결 연산자를 이용하는 방법
// 4. 산술 연산자를 이용하는 방법

// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
console.log(Number('0'));     // 0
console.log(Number('-1'));    // -1
console.log(Number('10.53')); // 10.53
// 불리언 타입 => 숫자 타입
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
console.log(parseInt('0'));       // 0
console.log(parseInt('-1'));      // -1
console.log(parseFloat('10.53')); // 10.53

// 3. + 단항 연결 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log(+'0');     // 0
console.log(+'-1');    // -1
console.log(+'10.53'); // 10.53
// 불리언 타입 => 숫자 타입
console.log(+true);    // 1
console.log(+false);   // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log('0' * 1);     // 0
console.log('-1' * 1);    // -1
console.log('10.53' * 1); // 10.53
// 불리언 타입 => 숫자 타입
console.log(true * 1);    // 1
console.log(false * 1);   // 0




// 불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법은 아래와 같다

// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 2. ! 부정 논리 연산자를 두번 사용하는 방법

// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x'));       // true
console.log(Boolean(''));        // false
console.log(Boolean('false'));   // true
// 숫자 타입 => 불리언 타입
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(NaN));       // false
console.log(Boolean(Infinity));  // true
// null 타입 => 불리언 타입
console.log(Boolean(null));      // false
// undefined 타입 => 불리언 타 입
console.log(Boolean(undefined)); // false
// 객체 타입 => 불리언 타입
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x');       // true
console.log(!!'');        // false
console.log(!!'false');   // true
// 숫자 타입 => 불리언 타입
console.log(!!0);         // false
console.log(!!1);         // true
console.log(!!NaN);       // false
console.log(!!Infinity);  // true
// null 타입 => 불리언 타입
console.log(!!null);      // false
// undefined 타입 => 불리언 타입
console.log(!!undefined); // false
// 객체 타입 => 불리언 타입
console.log(!!{});        // true
console.log(!![]);        // true



// 단축 평가
// 논리곱 연산자 &&는 두개의 피연산자가 모두 true로 평가될 때 
// true를 반환한다.
// 논리곱 연산자 &&는 논리 연산의 결과를 결정한 
// 두번째 피연산자의 평가 결과 
// 즉, 문자열 ‘Dog’를 그대로 반환한다.

'Cat' && 'Dog' // "Dog"

// 논리합 연산자 ||도 논리곱 연산자 &&와 동일하게 동작한다.
// 'Cat'이 이미 truthy 값이므로 논리 연산의 결과를 결정한다.
// 즉, 문자열 'Cat'을 그대로 반환한다.

'Cat' || 'Dog' // 'Cat'

// 단축 평가 표
// true || anything	    true
// false || anything	anything
// true && anything	    anything
// false && anything	false


// 함수의 인수를 초기화할 때 단축 평가 이용
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2

// 함수를 호출할 때 인수를 전달하지 않으면 
// 매개변수는 undefined를 갖는다. 
// 이때 단축 평가를 사용하여 매개변수의 기본값을 설정하면 
// undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.