// continue 문은 반복문(for, for…in, for…of, while, do…while)
// 의 코드 블록 실행을 현 지점에서 중단하고 
// 반복문의 증감식으로 이동한다. 
// break 문처럼 반복문을 탈출하지는 않는다.
// 아래는 문자열에서 특정 문자의 개수를 카운트하는 예제이다.

var string = 'Hello World.';
var count;

for (var i = 0; i < string.length; i++) {
    // 'l'이 아니면 현 지점에서 실행을 중단하고
    // 반복문의 증감식으로 이동한다.
    if (string[i] !== 'l') continue;
    count++;
}

console.log(count); // 3

// 참고로 String.prototype.match 메소드를 사용해도 같은 동작을 한다.
console.log(string.match(/l/g).length); // 3