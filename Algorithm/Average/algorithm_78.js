/*문제78: 원형 테이블

기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰다.
음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았다.

기린은 배가 너무 고파 혼자 음식을 먹기 시작한다.
원형 테이블에는 N 개의 음식들이 있다.
한개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번쨰 음식을 먹는다.
하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 한다.

마지막으로 남는 음식은 어떤 접시인가?

입력은 2개의 정수로 이루어지며 공백으로 구분되어 입력된다.
첫 번쨰 숫자가 음식의 개수 N, 두번쨰 숫자가 K
첫 번쨰 가져가는 음식이 K 번째 음식이며 나머지는 첫번째 음식으로부터
시계방향으로 가져간다.*/


const numberOfFood = 6;
const number = 3;

function circularTable(N, K) {  
    let result = [];
    let index = 0;
    for(let i=1; i<=N; i++) {
        result.push(i);
    }
    /* Solution 1
    while(result.length > 2){
        if(result.length === N) {
            result.shift();
        } else {
            const target = result[K-1];
            const tempBigger = result.filter(x => x > target).sort((a,b) => a-b);
            const tempSmaller = result.filter(x => x < target).sort((a,b) => a-b);
            result = tempBigger.concat(tempSmaller);
        }
    }
*/

/*Solution 2 */
    while(result.length > 2) {

        if(index > result.length - 1){
            index -= result.length;
        }
        result.splice(index, 1);
        index += K-1;
    }


    return result;
}

console.log(circularTable(numberOfFood,number));