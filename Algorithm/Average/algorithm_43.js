/*문제43: 10진수를 2진수로 

우리가 흔히 사용하는 숫자 1,8,19,28893 등등..은 10진수 체계이다.
이를 컴퓨터가 알아들을수있는 2진수로 바꾸려한다.

예를들어 13은 2^3 + 2^2 + 2^0 = 13이기 떄문에 1101로 표현

사용자에게 숫자를 입력받고 이를 2진수로 바꾸고 그 값을 출력
*/

const num = 13;

function getBinary(num) {
    let result = [];
    let dec = num;
    while(dec) {
        result.push(dec%2);
        dec = Math.floor(dec/2);
    }

    return result.reverse().join('');
}

console.log(getBinary(num));
//num.toString(2); //2진수로 변환