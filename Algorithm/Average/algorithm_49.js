/*문제49: 최댓값 구하기

순서가 없는 10개의 숫자가 공백으로 주어진다.
주어진 숫자들 중 최댓값을 반환하라
*/
let arr = [];
for(let i=0; i<10; i++) {
    arr.push(Math.floor(Math.random() * 100 + 1));
}

let result = Math.max(...arr);
console.log(arr);
console.log(result);