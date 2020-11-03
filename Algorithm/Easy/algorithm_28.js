/*문제28: 2-gram
2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법이다
예를 들어 'javascript'를 2-gram으로 반복해 본다면
다음과 같은 결과가 나온다.
 */
/*INPUT
Javascript

OUTPUT
J a
a v
v a
a s
s c
c r
r i
i p
p t
*/

const str = 'Javascript';

function twoGram(str) {
    for(let i=0; i<str.length-1; i++) {
        console.log(`${str[i]} ${str[i+1]}`);
    }
}
twoGram(str);