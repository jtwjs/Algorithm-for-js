/*문제50: 버블정렬 구하기

버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말함
시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됨

*/
function bubble(arr) {
    let result = arr.slice();//얕은복사
    
    for(let i=0; i<result.length; i++) {
        for(let j=0; j<result.length-i; j++) {
            
            if(result[j] > result[j + 1]){
                 const temp = result[j];
                 result[j] = result[j+1];
                 result[j+1] = temp;
            }
        }
    }
    return result;
}

const arr = [60,21,4,50,22,9,25];

console.log(bubble(arr));