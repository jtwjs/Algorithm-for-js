/*문제69: 골드바흐의 추측

골드바흐의 추측(Goldbach's conjecture)은 오래전부터
알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는
두개의 소수(Prime number)의 합으로 표시할수 있따는 것이다.
이떄 하나의 소수를 두번 사용하는 것은 허용한다.

위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을
골드바흐의 파티션이라고 한다.

ex:)
100 === 47 + 53
56 === 19 + 37*

2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는
코드를 작성하세요*/

const num = 100;

function goldbachConjecture(num) {
    let primeArr = primeNum(num);
    let result = [];
    for(let n of primeArr ) {
        if(primeArr.includes(num - n) && n<=(num-n)) {
            result.push([n,num-n]);
        }
    }
    return result;
    function primeNum(num) {//에라토스테네스의 체
        const max = Math.sqrt(num);
        console.log(max);
        const arr = [];    
        const result = [];
        for(let i=2; i<=num; i++) {
            arr[i] = i;
        }
        for(let i=2; i< max; i++) {
            if(arr[i] === 0 ) continue;
            for (let j=2*i; j<=num; j+=i){
                arr[j] = 0;
            }
        }
        for(let i=2; i<=num; i++) {
            if(arr[i] !== 0) result.push(arr[i]);
        }
        return result;
    }
    
}

console.log(goldbachConjecture(num));