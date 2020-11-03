/*문제18: 평균 점수
공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 
구하는 프로그램을 작성하시오 (단, 소숫점 자리는 모두 버림)*/


function randomNumberForArray(length) {
    let result = [];
    for(let i=0; i<length; i++ ) {
        result.push(Math.floor(Math.random()*100));
    }
    return result;
}
let num = randomNumberForArray(3);


num = Math.floor(num.reduce((a,b) => a+b)/3);

console.log(num);