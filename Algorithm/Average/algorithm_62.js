/*문제62: 20190923 출력하기

기준
1. 코드 내에 숫자가 없어야 한다.
    - ex:) console.log(20190923)이라고 하면 안됨
2. 파일 이름이나 경로를 사용해서는 안된다
3. 시간, 날짜 함수를 사용해선 안됨
4. 에러 번호 출력을 이용해서는 안됨
5. input을 이용해선 안됨
*/
const arr = ['이','공','일','구','공','구','이','삼'];
const numArray = ['공','일','이','삼','사','오','육','칠','팔','구'];
function abc(arr) {
    let result = '';
    const obj = {};
    for(let i in numArray) {
        obj[numArray[i]] = i;
    }
    
    for (let i of arr) {
        result += obj[i];
    }
    return result;
}

console.log(abc(arr)); 
