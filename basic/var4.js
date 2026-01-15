/*
키워드는 수행할 동작을 규정한 것이다. 
예를 들어 var 키워드는 새로운 변수를 생성할 것을 지시한다.
*/ 

// 변수의 선언
var x = 5 + 6;

// 함수의 선언
function foo (arg) {
    return ++arg;
}

var i = 0;
// 반복문
while (1) {
    if(i > 5) {
        break; // 반복문 탈출
    }
    console.log(i);
    i++;
}