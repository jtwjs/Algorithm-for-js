/*문제79: 순회하는 리스트

다음의 값이 주어졌을 때
l = [10, 20, 25, 27, 34, 35, 39]

n번 순회를 결정한다. 예를 들어 2번 순회면
l = [35, 39, 10, 20, 25, 27, 34]

여기서 변하기 전 원소와 변한후 원소의 값과 차가
가장 작은 값을 출력하는 프로그램을 작성하시오

예를들어 2번 순회했을 떄 변하기 전의 리스트와
변한 후의 리스트의 값은 아래와 같다.

순회전_리스트 = [10,20,25,27,34,35,39]
순회후_리스트 = [35,39,10,20,25,27,34]
리스트의_차 = [25,19,15,7,9,8,5]

39와 변한 후의 34의 값의 차가 5이므로 리스트의 차 중 최솟값이다.
따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들라

*/

const list = [10, 20, 25, 27, 34, 35, 39];
const n = 2;

function circulation(list, n) {
    let result = [];
    let otherList = list.slice();

    for(let i=0; i<n; i++) {
        otherList.unshift(otherList.pop());
    }

    for(let num in list) {
        result.push(Math.abs(list[num] - otherList[num]));
    }
    const min = Math.min(...result);
    const index = result.indexOf(min);

    return `index: ${index}\nvlaue: [${list[index]}, ${otherList[index]}]`;
}

console.log(circulation(list,n));