/*문제32: 문자열 만들기
문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성하시오 */

const str = '안녕하세요. 저는 프론트엔드 취업준비생입니다~';

function getWordCount(str) {
    let result;
    result = str.split(' ').length;
    
return result;
}

console.log(getWordCount(str));