/*
매개변수(Parameter, 인자)

함수의 작업 실행을 위해 추가적인 정보가 필요할 경우, 매개변수를 지정한다. 
매개변수는 함수 내에서 변수와 동일하게 동작한다.
*/

/*
- 매개변수(parameter, 인자) vs 인수(argument)
매개변수는 함수 내에서 변수와 동잃하게 메모리 공간을 확보하며
함수에 전달한 인수는 매개변수에 할당된다. 만약 인수를 전달하지 않으면 매개변수는
undefined로 초기화된다.
*/

var foo = function (p1, p2) {
    console.log(p1, p2);
};

foo(1); // 1 undefined


/*
Call-by-Value (값에 의한 호출)

원시 타입 인수는 Call-by-value(값에 의한 호출)로 동작한다. 
이는 함수 호출 시 원시 타입 인수를 함수에 매개변수로 전달할 때 
매개변수에 값을 복사하여 함수로 전달하는 방식이다. 
이때 함수 내에서 매개변수를 통해 값이 변경되어도 
전달이 완료된 원시 타입 값은 변경되지 않는다.
*/

function foo (primitive) {
    primitive += 1;
    return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x);      // 0



/*
Call-by-reference (참조에 의한 호출)

객체형(참조형) 인수는 Call-by-reference(참조에 의한 호출)로 동작한다. 
이는 함수 호출 시 참조 타입 인수를 함수에 매개변수로 전달할 때 
매개변수에 값이 복사되지 않고 객체의 참조값이 매개변수에 저장되어 
함수로 전달되는 방식이다. 이때 함수 내에서 매개변수의 참조값이 이용하여 
객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경된다.
*/

function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
    obj.gender = 'female';
}

var num = 100;
var obj = {
    name: 'Lee',
    gender: 'male'
};

console.log(num); // 100
console.log(obj); // { name: 'Lee', gender: 'male' }

changeVal(num, obj);

console.log(num); // 100
console.log(obj); // { name: 'Kim', gender: 'female' }

/*
changeVal 함수는 원시 타입과 객체 타입 인수를 전달 받아 함수 몸체에서 
매개변수의 값을 변경하였다. 이때 원시 타입 인수는 값을 복사하여 
매개변수에 전달하기 때문에 함수 몸체에서 그 값을 변경하여도 
어떠한 부수 효과(side-effect)도 발생시키지 않는다.

하지만 객체형 인수는 참조값을 매개변수에 전달하기 때문에 
함수 몸체에서 그 값을 변경할 경우 원본 객체가 변경되는 
부수 효과(side-effect)가 발생한다. 
이와 같이 부수 효과를 발생시키는 
비순수 함수(Impure function)는 복잡성을 증가시킨다. 
비순수 함수를 최대한 줄이는 것은 부수 효과를 최대한 억제하는 것과 같다. 
이것은 디버깅을 쉽게 만든다.

어떤 외부 상태도 변경하지 않는 함수를 순수함수(Pure function), 
외부 상태도 변경시켜는 부수 효과(side-effect)가 발생시키는 함수를 
비순수 함수(Impure function)라 한다.
*/



/*
반환값

함수는 자신을 호출한 코드에게 수행한 결과를 반환(return)할 수 있다. 
이때 반환된 값을 반환값(return value)이라 한다.

return 키워드는 함수를 호출한 코드(caller)에게 값을 반환할 때 사용한다.
함수는 배열 등을 이용하여 한 번에 여러 개의 값을 리턴할 수 있다.
함수는 반환을 생략할 수 있다. 이때 함수는 암묵적으로 undefined를 반환한다.
자바스크립트 해석기는 return 키워드를 만나면 함수의 실행을 중단한 후, 
함수를 호출한 코드로 되돌아간다. 
만일 return 키워드 이후에 다른 구문이 존재하면 그 구문은 실행되지 않는다.
*/

function calculateArea(width, height) {
  var area = width * height;
  return area; // 단일 값의 반환
}
console.log(calculateArea(3, 5)); // 15
console.log(calculateArea(8, 5)); // 40

function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  return [area, volume]; // 복수 값의 반환
}
console.log('area is ' + getSize(3, 2, 3)[0]);   // area is 6
console.log('volume is ' + getSize(3, 2, 3)[1]); // volume is 18


/*
함수 객체의 프로퍼티

함수는 객체이다. 따라서 함수도 프로퍼티를 가질 수 있다.
*/

function square(number) {
    return number * number;
}

square.x = 10;
square.y = 20;

console.log(square.x, square.y);

// 함수는 일반 객체와는 다른 함수만의 프로퍼티를 갖는다.

function square(number) {
    return number * number;
}
console.dir(square);


/*
arguments 프로퍼티

arguments 객체는 함수 호출 시 전달된 인수(argument)들의 
정보를 담고 있는 순회가능한(iterable) 유사 배열 객체(array-like object)이며 
함수 내부에서 지역변수처럼 사용된다. 즉, 함수 외부에서는 사용할 수 없다.
자바스크립트는 함수 호출 시 함수 정의에 따라 
인수를 전달하지 않아도 에러가 발생하지 않는다.
*/

function multiply(x, y) {
    console.log(arguments);
    return x * y;
}

multiply();        // {}
multiply(1);       // { '0': 1 }
multiply(1, 2);    // { '0': 1, '1': 2 }
multiply(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }

function sum() {

    var res = 0;

    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum());         // 0
console.log(sum(1, 2));     // 3
console.log(sum(1, 2, 3));  // 6

/*
자바스크립트는 함수를 호출할 때 인수들과 함께 암묵적으로 
arguments 객체가 함수 내부로 전달된다. 
arguments 객체는 배열의 형태로 인자값 정보를 담고 있지만 
실제 배열이 아닌 유사배열객체(array-like object)이다.

유사배열객체란 length 프로퍼티를 가진 객체를 말한다. 
유사배열객체는 배열이 아니므로 배열 메소드를 사용하는 경우 에러가 발생하게 된다. 
따라서 배열 메소드를 사용하려면 Function.prototype.call, 
Function.prototype.apply를 사용하여야 하는 번거로움이 있다.
*/

function sum() {
    if(!arguments.length) return 0;

    // arguments 객체를 배열로 변환
    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    });
}

// ES6
// function sum(...args) {
//   if (!args.length) return 0;
//   return args.reduce((pre, cur) => pre + cur);
// }

console.log(sum(1, 2, 3, 4, 5)); // 15


/*
caller 프로퍼티

caller 프로퍼티는 자신을 호출한 함수를 의미한다.
*/

function foo(func) {
    var res = func();
    return res;
}

function bar() {
    return 'caller : ' + bar.caller;
}

console.log(foo(bar)); // caller : function foo(func) {...}
console.log(bar());    // null (browser에서의 실행 결과)

/*
length 프로퍼티

length 프로퍼티는 함수 정의 시 작성된 매개변수 갯수를 의미한다.
*/

function fooz() {}
console.log(fooz.length); // 0

function bar(x) {
    return x;
}
console.log(bar.length); // 1

function baz(x, y) {
    return x * y;
}
console.log(baz.length) // 2


/*
name 프로퍼티

함수명을 나타낸다. 기명함수의 경우 함수명을 값으로 갖고 
익명함수의 경우 빈문자열을 값으로 갖는다.
*/

// 기명 함수 표현식(named function expression)
var namedFunc = function multiply(a, b) {
    return a * b;
};

var anonymousFunc = function(a, b) {
    return a * b;
};

console.log(namedFunc.name);     // multiply
console.log(anonymousFunc.name); // ''