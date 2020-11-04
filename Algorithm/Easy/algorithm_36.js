/*문제36: 구구단 출력하기
1~9까지의 숫자 중 하나를 입력하면 
그 단의 구구단 결과를 한줄에 출력하는 프로그램 작성 */

function gogodan(num) {
    let result = [];
    for(let i=1; i<=9; i++ ){
        result.push(num*i);
    }

    return result.join(' ');
}

console.log(gogodan(5));