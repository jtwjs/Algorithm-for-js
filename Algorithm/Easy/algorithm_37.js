/*문제37: 반장 선거
학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과
 받은 표 수를 출력하는 프로그램을 작성하시오 */

 let arr = ['원범','원범','혜원','혜원','혜원','혜원','유진','유진'];
function playVote(arr) {
    let result = '';
    let obj = {};

    for(let name of arr) {
        obj[name] === undefined ? obj[name] = 1 : obj[name] += 1;
    }
    
    let winner = (Object.keys(obj).reduce( (a, b) => {
        return obj[a] > obj[b] ? a:b;
    }));
    result = `${winner}(이)가 총 ${obj[winner]}표로 반장이 되었습니다.`;

    return result;
}


console.log(playVote(arr));