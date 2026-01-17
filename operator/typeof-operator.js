// typeof 연산자

typeof ''              // "string"
typeof 1               // "number"
typeof NaN             // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof null            // "object"
typeof []              // "object"
typeof {}              // "object"
typeof new Date()      // "object"
typeof /test/gi        // "object"
typeof function () {}  // "function"

typeof null  // "object" => 설계 실수
// 일치 연산자를 사용하자

var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null);        // true

typeof undeclared // "undefined"