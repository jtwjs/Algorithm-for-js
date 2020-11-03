/*문제9: concat을 활용한 출력방법
날짜와 시간 출력*/

//data
const year = '2020';
const month = '04';
const day = '26';
const hour = '11';
const minute = '34';
const second = '27';

const result = year.concat('/',month,'/',day,'/',' ',hour,':',minute,':',second);
console.log(result);

//output 
//2020/04/26 11:34:27


