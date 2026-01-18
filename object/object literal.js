// 객체 리터럴

/*
가장 일반적인 자바스크립트의 객체 생성 방식이다. 
클래스 기반 객체 지향 언어와 비교할 때 
매우 간편하게 객체를 생성할 수 있다. 
중괄호({})를 사용하여 객체를 생성하는데 
{} 내에 1개 이상의 프로퍼티를 기술하면 
해당 프로퍼티가 추가된 객체를 생성할 수 있다. 
{} 내에 아무것도 기술하지 않으면 빈 객체가 생성된다.
*/

var emptyObject = {};
console.log(typeof emptyObject); // object

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name);
    }
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', gender: 'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee


// Object 생성자 함수
/*
new 연산자와 Object 생성자 함수를 호출하여 
빈 객체를 생성할 수 있다. 
빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 
객체를 완성하는 방법이다.

생성자(constructor) 함수란 new 키워드와 함께 객체를 생성하고 
초기화하는 함수를 말한다. 
생성자 함수를 통해 생성된 객체를 인스턴스(instance)라 한다. 
자바스크립트는 Object 생성자 함수 이외에도 
String, Number, Boolean, Array, Date, RegExp 등의 
빌트인 생성자 함수를 제공한다. 
일반 함수와 생성자 함수를 구분하기 위해 
생성자 함수의 이름은 파스칼 케이스(PascalCase)를 
사용하는 것이 일반적이다.

객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 
해당 객체에 프로퍼티를 추가하고 값을 할당한다. 
이미 존재하는 프로퍼티 키에 새로운 값을 할당하면 
프로퍼티 값은 할당한 값으로 변경된다.
*/

// 빈 객체의 생성
var person = new Object();
// 프로퍼티 추가
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function () {
    console.log('Hi My name is ' + this.name);
};

console.log(typeof person);
console.log(person);

person.sayHello();



/*
사실 객체 리터럴 방식으로 생성된 객체는 결국 
빌트인(Built-in) 함수인 Object 생성자 함수로 객체를 생성하는 
것을 단순화시킨 축약 표현(short-hand)이다. 
다시 말해, 자바스크립트 엔진은 객체 리터럴로 
객체를 생성하는 코드를 만나면 내부적으로 
Object 생성자 함수를 사용하여 객체를 생성한다. 
따라서 개발자가 일부러 Object 생성자 함수를 사용해 
객체를 생성해야 할 일은 거의 없다.
대부분 객체 리터럴를 사용해 객체를 생성하면 된다.
 */



// 생성자 함수
// 생성자 함수를 사용하면 
// 마치 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 
// 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log('Hi! My name is ' + this.game);
    };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');

console.log('person1: ', typeof person1)
console.log('person2: ', typeof person2)
console.log('person1: ', person1)
console.log('person2: ', person2)

person1.sayHello();
person2.sayHello();


/**
생성자 함수 이름은 일반적으로 대문자로 시작한다. 
이것은 생성자 함수임을 인식하도록 도움을 준다.

프로퍼티 또는 메소드명 앞에 기술한 this는 
생성자 함수가 생성할 인스턴스(instance)를 가리킨다.

this에 연결(바인딩)되어 있는 프로퍼티와 메소드는 
public(외부에서 참조 가능)하다.

생성자 함수 내에서 선언된 일반 변수는 
private(외부에서 참조 불가능)하다. 
즉, 생성자 함수 내부에서는 자유롭게 접근이 가능하나 
외부에서 접근할 수 없다.
 */

function Human(name, gender) {
    var married = true;           // private
    this.name = name;             // public
    this.gender = gender;         // public
    this.sayGoodbye = function(){ // public
        console.log('Hi My name is ' + this.name);
    };
}

var human = new Human('Lee', 'male');

console.log(typeof human);
console.log(human)

console.log(human.gender);  // male
console.log(human.married); // undefined => 이유: private 이라서

human.sayGoodbye();



// 프로퍼티 키
/*
프로퍼티 키는 일반적으로 문자열(빈 문자열 포함)을 지정한다. 
프로퍼티 키에 문자열이나 symbol 값 이외의 값을 지정하면 
암묵적으로 타입이 변환되어 문자열이 된다. 
또한 문자열 타입의 값으로 수렴될 수 있는 표현식도 가능하다. 
프로퍼티 키는 문자열이므로 따옴표(‘’ 또는 ““)를 사용한다. 
하지만 자바스크립트에서 사용 가능한 유효한 이름인 경우, 
따옴표를 생략할 수 있다. 
반대로 말하면 자바스크립트에서 사용 가능한 유효한 이름이 아닌 경우, 
반드시 따옴표를 사용하여야 한다.
*/

var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
  1: 10,
  function: 1 // OK. 하지만 예약어는 사용하지 말아야 한다.
};

console.log(person);



// 프로퍼티 키 first-name에는 반드시 따옴표를 사용해야 하지만 
// first_name에는 생략 가능하다. 
// first-name은 자바스크립트에서 사용 가능한 유효한 이름이 
// 아니라 ‘-‘ 연산자가 있는 표현식이기 때문이다.

var person = {
  //first-name: 'Ung-mo', // SyntaxError: Unexpected token -
};



// 표현식을 프로퍼티 키로 사용하려면 
// 키로 사용할 표현식을 대괄호로 묶어야 한다. 
// 이때 자바스크립트 엔진은 표현식을 평가하기 위해 
// 식별자 first를 찾을 것이고 
// 이때 ReferenceError가 발생한다.

var person = {
  //[first-name]: 'Ung-mo', // ReferenceError: first is not defined
};




// 예약어를 프로퍼티 키로 사용하여도 에러가 발생하지는 않는다. 
// 하지만 예상치 못한 에러가 발생할 수 있으므로 
// 예약어를 프로퍼티 키로 사용해서는 않된다. 
// 자바스크립트 예약어는 아래와 같다.

/*
abstract  arguments boolean break byte
case  catch char  class*  const
continue  debugger  default delete  do
double  else  enum* eval  export*
extends*  false final finally float
for function  goto  if  implements
import* in  instanceof  int interface
let long  native  new null
package private protected public  return
short static  super*  switch  synchronized
this  throw throws  transient true
try typeof  var void  volatile
while with  yield
// *는 ES6에서 추가된 예약어
*/



// 프로퍼티 값 읽기
// 객체의 프로퍼티 값에 접근하는 방법은 마침표(.) 표기법과 
// 대괄호([]) 표기법이 있다. 
// 예제를 통해 이 두 방법의 차이를 살펴보자.

var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
  1: 10
};

console.log(person);

console.log(person.first-name);    // NaN: undefined-undefined
console.log(person[first-name]);   // ReferenceError: first is not defined
console.log(person['first-name']); // 'Ung-mo'

console.log(person.gender);    // 'male'
console.log(person[gender]);   // ReferenceError: gender is not defined
console.log(person['gender']); // 'male'

console.log(person['1']); // 10
console.log(person[1]);   // 10 : person[1] -> person['1']
//console.log(person.1);    // SyntaxError

/*
프로퍼티 키가 유효한 자바스크립트 이름이고 예약어가 아닌 경우 
프로퍼티 값은 마침표 표기법, 대괄호 표기법 모두 사용할 수 있다.

프로퍼티 이름이 유효한 자바스크립트 이름이 아니거나 예약어인 경우 
프로퍼티 값은 대괄호 표기법으로 읽어야 한다. 
대괄호([]) 표기법을 사용하는 경우, 
대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 한다.

객체에 존재하지 않는 프로퍼티를 참조하면 undefined를 반환한다.
*/



// 객체에 존재하지 않는 프로퍼티를 참조하면 undefined를 반환한다.
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male',
};

console.log(person.age); // undefined