/*문제61: 문자열 압축하기

문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶다.
*/

const str = 'aaabbbbcdddd';

function stringCompression(str) {
    let count = 1;
    let store = str[0];
    let result = '';
    for(let i of str) {
        if(i === store) {
            count++;
        }else {
            result += store + count;
            store = i;
            count = 1;
        }
    }
    result += store + count;
    return result;
}

console.log(stringCompression(str));