/*문제58: 콤마 찍기

원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 한다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려 한다.

숫자를 입력받고 천 단위로 콤마(,)를 찍어줏에ㅛ

예를 들어, 123456789를 입력받으면 123,456,789를 출력해야함
*/

const num = 123456789;

function comma(num) {
    const s = String(num);
    if(s.length <= 3) {
        return s;
    } 
    
    return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
}

console.log(comma(num));