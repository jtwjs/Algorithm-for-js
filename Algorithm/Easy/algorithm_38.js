/*문제38: 호준이의 아르바이트

1위~3위 학생은 여러명일수 있고 1~3위 학생 중
중복되는 학생까지 포함하여 사탕을 사기로 한다.
학생들의 점수를 공백으로 구분하여 입력을 받고
사탕을 받은 학생의 수를 입력하시오*/


let score = [97,86,75,66,55,97,85,97,97,95];
const RANK = 3;
function getNumberOfStudentToBeCandy(score) {
    let result = RANK;
    score.sort((a,b) => b-a);

    for(let i=RANK; i<score.length; i++) {
        if(score[RANK-1] !== score[i]){ 
            break;
        }
        result++;
    }
    return result;
}

console.log(getNumberOfStudentToBeCandy(score));