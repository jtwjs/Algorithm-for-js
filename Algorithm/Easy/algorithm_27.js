/*문제27: 객체 만들기
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고,
두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어진다

두 개를 합쳐 학생의 이름이 KEY 이고 VALUE가 수학 점수인 객체를
출력하시오*/

/*INPUT
Yujin Hyewon
70 100 */
/*OUTPUT
{'Yujin': 70, 'Hyewon': 100} */

const name = ['Taewoong', 'Untack'];
const score = [70, 100];

let obj = {};

for(let i=0; i<name.length; i++) {
    obj[name[i]] = score[i];
}

console.log(obj);
