/*문제14: 3의 배수 인가요?
입력으로 랜덤한 숫자 n이 주어진다.
만약 그수가 3의 배수라면 '짝'이라는 글자를, 
3의배수가 아니라면 n을 그대로 출력해주시오 */

function multipleOfThree(number) {
    if(number % 3 === 0 && number !== 0) {
        return '짝';
    }
    return number;
}

console.log(multipleOfThree(0));
