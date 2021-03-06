/*문제64: 이상한 엘리베이터

정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있다.
화물은 7Kg, 3Kg 두가지 이며 팔이 아픈 은후는 
가장 적게 화물을 옮기고 싶습니다.

예를들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

입력 
정량 N이 입력된다.

출력
가장 적게 옮길 수 있는 횟수를 출력한다.
만약 어떻게 해도 정량이 N이 되지않는다면 -1을 출력*/

const n = 5;
const CARGO_A = 7;
const CARGO_B = 3;
function abc(n) {
    let result = 0;

    while(true) {
        if(n%7 === 0) {
            result += n/7;
            break;
        }

        n -= 3;
        result ++;

        if(n < 0) {
            result = -1;
            break;
    }
}

return result;
}

console.log(abc(n));