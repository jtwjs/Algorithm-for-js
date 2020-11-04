/*문제40: 놀이동산에 가자

모든 놀이기구는 한번에 타는 인원에는 제한이 없지만
제한 무게를 넘으면 무조건 다음 기구를 타야한다.

원범이와 친구들이 총 몇명 탈수 있는지 
알 수 있는 프로그램을 작성하시오 

첫번쨰 입력으로 제한 무게가 주어지고 
두번쨰 입력으로는 함꼐한 친구들의 수 n이 주어진다.
그 다음 차례대로 탑승할 친구들의 무게가 주어진다.
몸무게는 무작위로 주어진다.
*/



function fun() {
    const MAXWEIGHT = Math.floor(Math.random() * 100 + 150);
const FRIENDNUM = Math.floor(Math.random() * 5 + 3);
let friendWeight = [];

for(let i=0; i<FRIENDNUM; i++) {
    friendWeight[i] = Math.floor(Math.random() * 60 + 40);
}
    let result = 0;
    let remain = MAXWEIGHT;

    friendWeight.forEach( x => {
        if(remain - x > 0) {
            remain = remain - x;
            result++;
        }
        return;
    })
    return `탑승 제한무게: ${MAXWEIGHT}kg\n친구들: ${FRIENDNUM}명\n탑승할수있는 인원: ${result} `;
}


console.log(fun());
