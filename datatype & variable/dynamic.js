// 자바스크립트는 동적 타입(Dynamic/Weak Type) 언어이다. 
// 변수의 타입 지정(Type annotation)없이 값이 할당되는 과정에서 자동으로 변수의 타입이 결정(타입 추론, Type Inference)된다. 즉, 변수는 고정된 타입이 없다. 
// 따라서 같은 변수에 여러 타입의 값을 자유롭게 할당할 수 있다.

var str = 'Hello';
var num = 1;
var bool = true;

var foo = 'string';
console.log(typeof foo); // string
foo = 1;
console.log(typeof foo); // number