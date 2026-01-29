// 산술 연산자는 이항 산술 연산자와 단항 산술 연산자로 구분할 수 있다.

// 이항 산술 연산자
5 + 2  // 7
5 - 2  // 3
5 * 2  // 10
5 / 2  // 2.5
5 % 2  // 1

// 단항 산술 연산자
var x = 5, result;

// 선대입 후증가 (Postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후대입 (Prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선대입 후감소 (Postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후대입 (Prefix decrement operator)
result = --x;
console.log(result, x); // 5 5

'1' + '2'      // '12'
'1' + 2        // '12'

1 + 2          // 3
1 + true       // 2 (true → 1)
1 + false      // 1 (false → 0)
true + false   // 1 (true → 1 / false → 0)
1 + null       // 1 (null → 0)
1 + undefined  // NaN (undefined → NaN)