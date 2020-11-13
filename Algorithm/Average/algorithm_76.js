/*문제76: 안전한 땅

전쟁이 끝난 후, A 나라에서는 폐허가 된 도시를 재건하려고한다.
그런데 이 땅은 전쟁의 중심지였으므로 전쟁 중 매립된
지뢰가 아직도 많이 남아 있다는 것이 판명되었다.
정부는 가장 먼저 지뢰를 제거하기 위해 수색반을 꾸렸다.

수색반은 가장 효율적인 지뢰 제거가 하고싶다. 
수색반은 도시를 격자무늬로 나눠놓고 수색할 수 있는 범위 내에
가장 많은 지뢰가 매립된 지역을 가장 먼저 작업하고 싶다.

가장 먼저 테스트 케이스의 수를 나타내는 1이상 100이하의 자연수가 주어진다.
각 테스트 케이스의 첫 줄에는 수색할 도시의 크기 a와 수색반이 한 번에 수색가능한
범위 b가 주어진다. (a와 b 모두 정사각형의 가로 또는 세로를 나타냄
예를 들어 10이 주어지면 10x10칸의 크기를 나타낸다.)

그 후 a줄에 걸쳐 도시 내 지뢰가 있는지의 여부가 나타난다.
0은 지뢰가 없음 1은 지뢰가 있음을 뜻함

각 테스트 케이스에 대한 수색가능한 범위 bxb 내에서 찾을수 있는
가장 큰 지뢰의 개수를 구하라
*/

//수색할 도시의 크기 a
const a = 5;

//수색반이 탐색할 수 있는 범위
const b = 3;

const mineField = [[1,0,0,1,0],
                   [0,1,0,0,1],
                   [0,0,0,1,0],
                   [0,0,0,0,0],
                   [0,0,1,0,0]];

function largestSearchMine(aField, aSize, aRange) {
    const length = aSize - aRange;
    let result = [];
    for(let f=0; f<=length; f++) {
        for(let k=0; k<=length; k++) {
            let count = 0;
            for(let i=f; i<=length + f; i++) {
                for(let j=k; j<=length + k; j++) {
                    if(aField[i][j] === 1){
                        count++;
                    }
                }
            }
            result.push(count);
        }
    }
    return Math.max.apply(null,result);
}

console.log(largestSearchMine(mineField,a,b));