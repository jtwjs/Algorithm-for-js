/*문제57: 1의 개수

0부터 1000까지 1의 개수를 세는 프로그램을 만들려고 한다.
예를들어 0부터 20까지의 1의 개수를 세어본다면
1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각
1이 들어가므로 12개의 1이 있게 된다. 11은 1이 2번 들어간 셈

그렇다면 0부터 1000까지 수에서 1은 몇번이나 들어갔을 까 출력하라*/

const num = 1000;

function getCountOne(num) {
    let s = '';
    for(let i=0; i<num; i++) {
        s += i;
    }

    return  s.match(/1/g).length;
}
console.log(getCountOne(num));