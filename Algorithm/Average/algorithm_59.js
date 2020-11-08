/*문제59: 빈칸채우기

총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면
그 문자열을 가운데 정렬을 해주고, 나머지 빈
부분에는 '='를 채워 넣어주세요*/

const str =  'Hi';
const MAX_LENGTH = 50;
function fillInBlank(str) {
    const length = str.length;
    const middle = (MAX_LENGTH / 2) + Math.floor(length / 2);
    let result = str;
    result = result.padStart(middle, '=').padEnd(MAX_LENGTH, '=');
    return result;

}

console.log(fillInBlank(str));