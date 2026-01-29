// 할당 연산자
var x;

x = 10;  // 10
x += 5;  // 15
x -= 5;  // 10
x *= 5;  // 50
x /= 5;  // 10
x %= 5;  // 0

var str = 'My name is ';
str += 'Lee'; // My name is Lee

var x;
console.log(x = 10); // 10

var x, y;
y = x = 10; // 연쇄 할당(Chained assignment)
console.log(x, y); // 10 10