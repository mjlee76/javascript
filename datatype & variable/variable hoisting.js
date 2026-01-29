console.log(foo); // 1. -> undefined
var foo = 123;
console.log(foo); // 2. 123
{
    var foo = 456;
}
console.log(foo); // 3. 456


// var 키워드를 사용하여 선언한 변수는 중복 선언이 가능하기 때문에 위의 코드는 문법적으로 문제가 없다.

// ①에서 변수 foo는 아직 선언되지 않았으므로 ReferenceError: foo is not defined가 발생할 것을 기대했겠지만 콘솔에는 undefined가 출력된다.

// 이것은 다른 C-family 언어와는 차별되는 자바스크립트의 특징으로 모든 선언문은 호이스팅(Hoisting)되기 때문이다.

// 호이스팅이란 var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성을 말한다. 즉, 자바스크립트는 모든 선언문(var, let, const, function, function*, class)이 선언되기 이전에 참조 가능하다.
