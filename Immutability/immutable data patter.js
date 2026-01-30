/*
의도하지 않은 객체의 변경이 발생하는 원인의 대다수는 
“레퍼런스를 참조한 다른 객체에서 객체를 변경”하기 때문이다. 
이 문제의 해결 방법은 비용은 조금 들지만 객체를 불변객체로 만들어 
프로퍼티의 변경을 방지하며 객체의 변경이 필요한 경우에는 
참조가 아닌 객체의 방어적 복사(defensive copy)를 통해 
새로운 객체를 생성한 후 변경한다.

- 객체의 방어적 복사(defensive copy)
Object.assign

- 불변객체화를 통한 객체 변경 방지
Object.freeze
*/


// 객체의 방어적 복사: Object.assign
/*
Object.assign은 타킷 객체로 소스 객체의 프로퍼티를 복사한다. 
이때 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 
타켓 객체의 프로퍼티들은 소스 객체의 프로퍼티로 덮어쓰기된다. 
리턴값으로 타킷 객체를 반환한다. 
ES6에서 추가된 메소드이며 Internet Explorer는 지원하지 않는다.
*/

// Syntax
//Object.assign(target, ...sources)

// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj === copy); // false

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1);     // { a: 1, b: 2, c: 3 }, 타겟 객체가 변경된다!

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }

/*
Object.assign을 사용하여 기존 객체를 변경하지 않고 객체를 복사하여 사용할 수 있다.
Object.assign은 완전한 deep copy를 지원하지 않는다.
객체 내부의 객체(Nested Object)는 Shallow copy된다.
*/

const user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

// 새로운 빈 객체에 user1을 copy한다.
const user2 = Object.assign({}, user1);
// user1과 user2는 참조값이 다르다.
console.log(user1 === user2); // false

console.log(user1.address === user2.address); // true

user1.address.city = 'Busan'
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan

/*
얕은 복사(Object.assign)을 사용하면 새로운 변수에 객체를 복사해도
겉(name 과 같은 원시값,불변값)은 값을 새로 복사하여 만드는데
속(address와 같은 객체,변경가능객체)은 새로운 변수가 다시 이 참조값을 가리키도록
하기 때문에 user1.address.city를 변경하면 user2.address.city도 변경된 값이
나오게 됨.
=> 이래서 아래의 불변 객체 방법을 사용함.
*/

// Object.assign은 완전한 deep copy를 지원하지 않는다.
// 참고로 const는 재선언과 재할당이 불가해서 같은 변수로 재선언 불가


// Object.freeze를 사용하여 불변 객체로 만들 수 있다.
const user3 = Object.assign({}, user1, {name: 'Kim'});

console.log(user1.name); // Lee
console.log(user3.name); // Kim

Object.freeze(user1);

user1.name = 'Kim'; // 무시된다!

console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }

console.log(Object.isFrozen(user1)) // true

// 하지만 객체 내부의 객체(Nested Object)는 변경가능하다.

const user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

Object.freeze(user);

user.address.city = 'Busan'; // 변경된다!

console.log(user); // { name: 'Lee', address: { city: 'Busan' } }

// 내부 객체까지 변경 불가능하게 만들려면 Deep freeze를 사용

function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);

    props.forEach((name) => {
        const prop = obj[name];
        if(typeof prop === 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });
    return Object.freeze(obj);
}

const user4 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

deepFreeze(user4);

user4.name = 'Kim';           // 무시된다.
user4.address.city = 'Busan'; // 무시된다.

console.log(user4); // { name: 'Lee', address: { city: 'Seoul' } }



/*
Immutable.js

Object.assign과 Object.freeze을 사용하여 불변 객체를 만드는 방법은 
번거러울 뿐더러 성능상 이슈가 있어서 큰 객체에는 사용하지 않는 것이 좋다.

또 다른 대안으로 Facebook이 제공하는 Immutable.js를 사용하는 방법이 있다.

Immutable.js는 List, Stack, Map, OrderedMap, 
Set, OrderedSet, Record와 같은 
영구 불변 (Permit Immutable) 데이터 구조를 제공한다.

npm을 사용하여 Immutable.js를 설치한다.

$ npm install immutable
=> Immutable.js의 Map 모듈을 임포트하여 사용해보자.
*/

const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') // 2
map2.get('b') // 50

// map1.set(‘b’, 50)의 실행에도 불구하고 map1은 불변하였다. 
// map1.set()은 결과를 반영한 새로운 객체를 반환한다.