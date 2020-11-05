/*문제44: 각 자리수의 합

사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을
만드시오

예를 들어 18234 = 1+8+2+3+4 이고 정답은 18이다.
3849 = 3+8+4+9 이고 정답은 24이다.
*/

let num = 18234;

function sumOfEachDigit(num) {
    let result = 0;
    while(num) {
        result += num%10;
        num = Math.floor(num/10);
    }
    return result;
}

console.log(sumOfEachDigit(num));