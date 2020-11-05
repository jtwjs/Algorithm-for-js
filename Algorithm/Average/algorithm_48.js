/*문제48: 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서
출력하는 프로그램을 작성하시오*/

const str = 'AAABBBcccddd';

function caseToCaseConversion(str) {
    let result = '';

    str.split('').map( x => {
        if(/[A-Z]/g.test(x)) {
            result += x.toLowerCase();
        } else {
            result += x.toUpperCase();
        }
    });
    return result;
};


console.log(caseToCaseConversion(str));
