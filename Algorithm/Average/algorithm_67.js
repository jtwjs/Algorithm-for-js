/*문제67: 민규의 악수

광장에서 모인 사람들과 악수를 하는 행사가 열렸다.
참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔다.

이 행사에서 진행된 악수는 총 n번이라고 했을 때,
민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
그리고 민규를 포함한 행사 참가자는 몇 명일까요?

- 악수는 모두 1 대 1로 진행됨
- 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수함
- 같은 상대와 중복된 악수는 카운트되지 않음
- 민규를 제외한 참가자는 행사를 모두 마쳤음

예를들어 행사에서 59회의 악수가 진행되었다면
민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

행사에서 진행된 악수 횟수(n)를 입력으로 받으면 
민규의 악수 횟수와 행사참가자 수가 출력된다. 
 */

const num = 59;

function getCountHandShake(num) {
    let result = [];
    let a = 1;
    let temp = 0;
    while(true) {

        if(num <  factorial(a - 1)) {
            result.push(num - temp);
            result.push(a);
            break;
        }
        temp = factorial(a - 1);
        a += 1;
    }
    return result;
}

function factorial(n) {
    if(n===0) return n;
    return n + factorial(n-1);
}

console.log(getCountHandShake(num));