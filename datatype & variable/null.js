var foo = 'Lee';
foo = null; // 참조 정보가 제거됨
console.log(foo);

var element = document.querySelector('.myElem');
// HTML 문서에 myElem 클래스를 갖는 요소가 없다면 null을 반환한다.
console.log(element); // null

// 타입을 나타내는 문자열을 반환하는 typeof 연산자로 null 값을 연산해 보면 null이 아닌 object가 나온다. 
// 이는 자바스크립트의 설계상의 오류이다.
var foo = null;
console.log(typeof foo); // object

// 따라서 null타입을 확인할 때 typeof 연산자 말고 일치 연산자를 사용한다.
var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null);        // true