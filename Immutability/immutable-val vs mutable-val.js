// Javascript의 원시 타입(primitive data type)은 
// 변경 불가능한 값(immutable value)이다.
/*
- Boolean
- null
- undefined
- Number
- String
- Symbol (New in ECMAScript 6)
*/

var str = 'Hello';
str = 'world';

/*
첫번째 구문이 실행되면 메모리에 문자열 ‘Hello’가 생성되고 
식별자 str은 메모리에 생성된 문자열 ‘Hello’의 메모리 주소를 가리킨다. 
그리고 두번째 구문이 실행되면 이전에 생성된 문자열 ‘Hello’을 수정하는 것이 아니라 
새로운 문자열 ‘world’를 메모리에 생성하고 식별자 str은 이것을 가리킨다. 
이때 문자열 ‘Hello’와 ‘world’는 모두 메모리에 존재하고 있다. 
변수 str은 문자열 ‘Hello’를 가리키고 있다가 문자열 ‘world’를 가리키도록 
변경되었을 뿐이다.
*/

var statement = 'I am an immutable value'; // string은 immutable value
var otherStr = statement.slice(8, 17);

console.log(otherStr); // 'immutable'
console.log(statement); // 'I am an immutable value'

/*
2행에서 Stirng 객체의 slice() 메소드는 
statement 변수에 저장된 문자열을 변경하는 것이 아니라 
사실은 새로운 문자열을 생성하여 반환하고 있다. 
그 이유는 문자열은 변경할 수 없는 immutable value이기 때문이다.
*/

var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2); // arr.push()는 메소드 실행 후 arr의 length를 반환
console.log(arr.length); // 1
console.log(v2); // 1

/*
상기 예제에서 v2의 값은 무엇인가? 
문자열의 예와 같이 배열이 동작한다면 v2는 
새로운 배열(하나의 요소를 가지고 그 값은 2인)을 가지게 될 것이다. 
그러나 객체인 arr은 push 메소드에 의해 update되고 
v2에는 배열의 새로운 length 값이 반환된다.

처리 후 결과의 복사본을 리턴하는 문자열의 메소드 slice()와는 달리 
배열(객체)의 메소드 push()는 직접 대상 배열을 변경한다. 
그 이유는 배열은 객체이고 객체는 immutable value가 아닌 변경 가능한 값이기 때문이다.
*/

var user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

var myName = user.name; // 변수 myName은 string 타입이다.

user.name = 'Kim';
console.log(myName); // Lee

myName = user.name; // 재할당
console.log(myName); // Kim

/*
user.name의 값을 변경했지만 변수 myName의 값은 변경되지 않았다. 
이는 변수 myName에 user.name을 할당했을 때 
user.name의 참조를 할당하는 것이 아니라 immutable한 값 ‘Lee’가 
메모리에 새로 생성되고 myName은 이것을 참조하기 때문이다. 
따라서 user.name의 값이 변경된다 하더라도 
변수 myName이 참조하고 있는 ‘Lee’는 변함이 없다.
*/

var user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

var user2 = user1; // 변수 user2는 객체 타입이다.

user2.name = 'Kim';

console.log(user1.name); // Kim
console.log(user2.name); // Kim

/*
위의 경우 객체 user2의 name 프로퍼티에 새로운 값을 할당하면 
객체는 변경 불가능한 값이 아니므로 객체 user2는 변경된다. 
그런데 변경하지도 않은 객체 user1도 동시에 변경된다. 
이는 user1과 user2가 같은 어드레스를 참조하고 있기 때문이다.
(user1 과 user2 가 모두 하나의 객체를 가리키는 구조)
이것이 의도한 동작이 아니라면 참조를 가지고 있는 
다른 장소에 변경 사실을 통지하고 대처하는 추가 대응이 필요하다.
*/