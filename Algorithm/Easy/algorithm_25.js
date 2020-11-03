/*문제25: 원의 넓이를 구하시오
원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할수 있다.
함수를 사용하여 원의 넓이를 구하는 코드를 작성해라 

입력으로 반지름의 길이 정수 n이 주어지며 원의 넓이를 반환하는
함수를 만들라*/

const radius = 5;
function getWidthOfCircle(radius) {
    return radius*radius*Math.PI;
}

console.log(getWidthOfCircle(radius));

