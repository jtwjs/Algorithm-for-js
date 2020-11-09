/*문제66: 블럭탑쌓기

탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진
순서에 맞게 쌓아야 한다.
순서에 맞게 쌓지 않으면 무너질 수 있다.

예를들면 정해진 순서가 BAC라면 A다음 C가 쌓아져야 한다.
선행으로 쌓아야 하는 블러기 만족된 경우라면 탑이 무너지지 않는다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있다.
- B 다음 블럭이 C가 될 수 있다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하라

1. 블럭은 알파벳 대문자로 표기
2. 규칙에 없는 블럭이 사용될 수 있다.
3. 중복된 블럭은 존재하지 않는다.
*/

const blockTop = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

function buildingBlock(blocks,rule) {
    const regExp = new RegExp('['+rule+']','g');
    let result = [];
    let arr = [];
    let another = [];
    let state;
    
    for(let block of blockTop) {
         state = true;
        arr = [];
        another = [];
        for (let x of block.matchAll(regExp)){
            arr.push(x[0]);
            another.push(x[0]);
        }
        another.sort();
        
        for(let i=0; i<arr.length; i++) {
            if(arr[i] !== another[i]) {
                 result.push('불가능');
                 state = false;
                 break;
            }
        }

        if(state) {
            result.push('가능');
        }
        
        
        

    }
    
    return result;
}
console.log(buildingBlock(blockTop,rule));