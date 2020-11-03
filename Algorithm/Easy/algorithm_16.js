/*로꾸거
문장이 입력되면 거꾸로 출력하는 프로그램을 만들자 */

const str = '거꾸로';

function revertSentence(str) {
    let result = str.split('');

    return result.reverse().join('');
}

console.log(revertSentence(str));