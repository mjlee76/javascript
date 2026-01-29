// 블록문(Block statement/Compound statement)는 0개 이상의 문들을 
// 중괄호로 묶은 것으로 코드 블록 또는 블록이라고 부르기도 한다. 
// 자바스크립트는 블록문을 하나의 단위로 취급한다.

// 블록문은 단독으로 사용할 수도 있으나 
// 일반적으로 제어문이나 함수 선언문 등에서 사용한다. 
// 문의 끝에는 세미 콜론(;)을 붙이는 것이 일반적이지만 
// 블록문은 세미콜론을 붙이지 않는다.

// 블록문
{
    var foo = 10;
    console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
    x++;
}
console.log(x); // 10

// 함수 선언문
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2)); // 3

