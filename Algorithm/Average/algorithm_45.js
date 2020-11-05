/*문제45: getTime()함수 사용하기

Date객체의 메소드 중 하나인 getTime()은 
1970년 1월 1일 0시 0분 0초 이후로부터 지금까지
흐른 시간을 천분의 1초 단위(ms)로 반환한다.

이를 이용하여 현재연도(2020)를 출력해봐라
*/

const currentDate = new Date();

const a = Math.floor((currentDate.getTime())/(60*60*24*365*1000));

console.log(a + 1970);