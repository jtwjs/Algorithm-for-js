/*문제80: 순열과 조합

조합이란 원소들을 조합하여 만들 수 있는 경우의 수이며
원소의 순서는 신경쓰지 않는다. 

순열이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원서로
취급하는 선택법이다.

한글의 자모 24중 자음은 총 14개이다.
이중 입력받은 자음을 n개를 선택하여 나올 수 있는 모든 조합과 조합의 수를 출력하고 싶다.

나올 수 있는 모든 조합을 아래와 같이 출력해주시오

<--요구 조건-->
1. 첫 번째 입력으로 선택할 한글 자음이 주어진다.
2. 두 번쨰 입력으로 조합의 수가 주어진다.
3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력하라*/


const consonant = ['ㄱ','ㄴ','ㄷ','ㄹ'];
const num = 3; 

function combination(constants, num) {
    let result = [];
    
    const f = (pre, constants) => {
        for(let i=0; i<constants.length; i++) {
            result.push(pre + constants[i]);
            f(pre + constants[i], constants.slice(i + 1));
        }
    }
    f("", constants);
    return result.filter(x => x.length === 3);
}

console.log(combination(consonant, num));