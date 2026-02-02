/*
일급 객체(first-class object)란 생성, 대입, 연산, 인자 또는 
반환값으로서의 전달 등 프로그래밍 언어의 기본적 조작을 
제한없이 사용할 수 있는 대상을 의미한다.

다음 조건을 만족하면 일급 객체로 간주한다.

1. 무명의 리터럴로 표현이 가능하다.
2. 변수나 자료 구조(객체, 배열 등)에 저장할 수 있다.
3. 함수의 매개변수에 전달할 수 있다.
4. 반환값으로 사용할 수 있다.
*/

// 1. 무명의 리터럴로 표현이 가능하다.
// 2. 변수나 자료 구조에 저장할 수 있다.
var increase = function(num) {
    return ++num;
};

var decrease = function(num) {
    return --num;
};

var predicates = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 반환값으로 사용할 수 있다.
function makeCounter(predicates) {
    var num = 0;

    return function () {
        num = predicates(num);
        return num;
    };
}

var increaser = makeCounter(predicates.increase)
console.log(increaser()); // 1
console.log(increaser()); // 2

var decreaser = makeCounter(predicates.decrease)
console.log(decreaser()); // -1
console.log(decreaser()); // -2

/*
Javascript의 함수는 위의 조건을 모두 만족하므로 
Javascript의 함수는 일급객체이다. 
따라서 Javascript의 함수는 흡사 변수와 같이 사용할 수 있으며 
코드의 어디에서든지 정의할 수 있다.

함수와 다른 객체를 구분짓는 특징은 호출할 수 있다는 것이다.
*/