/*문제29: 대문자만 지나가세요

알파벳 하나만 입력하고 그 알파벳이 대문자이면 YES
아니면 NO를 입력하는 프로그램을 만드시오 */

const char = 'a';

function upperCaseFilter(char) {
    if(/[^A-Z]/.test(char)) return 'NO';

    return 'YES';
}

console.log(upperCaseFilter(char));