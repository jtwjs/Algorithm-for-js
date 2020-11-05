/*문제46:  각 자리수의 합 2

1부터 20까지의 (20포함) 모든 숫자를 일렬로 놓고
모든 자릿수의 총합을 구하시오

예를들어 10부터 15까지의 모든 숫자를 일렬로 높으면
101112131415이고 각 자리의 숫자를 더하면 21이다.*/

function sumEachOfNumber() {
    let result = []; 
    for(let i=1; i<=20; i++) {
        result.push(i);
    }
    result = result.join('').split('').reduce((acc, b) => {
        return acc+Number(b);
    },0);

    return result;
}

console.log(sumEachOfNumber());