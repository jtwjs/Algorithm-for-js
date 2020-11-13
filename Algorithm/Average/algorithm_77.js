/*문제77: 가장 긴 공통 부분 문자열

가장 긴 공통 부분 문자열(Longest Common Subsequence)이란
A,B 두 문자열이 주어졌을 때 두열에 공통으로 들어 있는 요소로
만들 수 있는 가장 긴 부분열을 말한다. 
여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 
순서가 바뀌지 않은 열을 말한다. 

예를 들어 S1 = ['T','H','I','S','I','S,'S','T','R','I','N','G','S']
S2 = ['T','H','I','S','I','S'] 라는 두 문자열이 있을 때
둘 사이의 부분 공통 문자열의 길이는 ['T','H','I','S','I','S']의 6개가 된다.

이처럼 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는
프로그램을 만드시오

두개의 문자열이 한줄에 하나씩 주어진다. 문자열은 알파벳 대문자로만 구성되며
그 길이는 100글자가 넘지 않는다.

출력은 이 두문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 된다.`*/

const A = 'THIS IS STRINGS';
const B = 'TATHISISKKQQAEW';

function longestCommonSubsequence(a,b) {
    const aString = notBlankStringArr(a);
    const bString = notBlankStringArr(b);
    let result = [];
    let str = '';
    let count = 0;
    let biggerArr;
    let smallerArr;
    let check = false;
    if(aString.length > bString.length) {
        biggerArr = aString;
        smallerArr = bString;
    } else {
        biggerArr = bString;
        smallerArr = aString;
    }
    
    for(let i=0; i<biggerArr.length; i++) {
        for(let j=count; j<smallerArr.length; j++) {
            if(biggerArr[i] === smallerArr[j]) {
        
                str += biggerArr[i];
                
                check = true;
                 count++;
                if(j === smallerArr.length - 1) {
                    result.push(str);
                }
                break;
            } else {
                if(str !== '') result.push(str);
                str = '';
                count = j+1;
                if(j === smallerArr.length -1) count = 0;

                if(i !== 0 && check) {
                    i--;
                    count = 0;
                    check = false;
                    break;
                }

                
            }
            }
    }
    console.log(result);
    return Math.max.apply(null, result.map(x => x.length));

    function notBlankStringArr(x) {
        return x
            .split('')
            .filter(x => x.trim() !== '')
            ;
    }
}

console.log(longestCommonSubsequence(A,B));

/*
문자열 조합 배열만들기

function sol(string) {
    let result = [];
    for(let i=1; i<string.length + 1; i++) {
        for(let j=0; j<i; j++) {
            result.push(string.slice(j, j + string.length + 1 - i));
        }
    }
    return result;
} */