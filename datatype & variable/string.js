// 문자열 타입

var str = 'string';
str = "string";
str = `string`; 

str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다.";
str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.';

// 문자열은 배열처럼 인덱스를 통해 접근 가능(유사 배열)
var str = 'string';

for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
} 

// 문자열을 변경할 수 없다.
str[0] = 'S';
console.log(str); // string

// 기타
var str = 'string';
console.log(str); // string

str = 'String';
console.log(str); // String

str += ' test';
console.log(str); // String test

str = str.substring(0, 3);
console.log(str); // Str

str = str.toUpperCase();
console.log(str); // STR