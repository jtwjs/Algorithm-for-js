/*문제:75 이상한 369

369 게임을 하는데 조금 이상한 규칙이 있다.
3이나 6,9일때만 박수를 쳐야한다. 예를 들어
13, 16과 같이 3과 6,9만으로 됫 숫자가 아닐 경우엔
박수를 치지 않는다.
수현이는 박수를 몇번 쳣는지 확인하고 싶다.
36일때 박수를 쳤다면 박수를 친 횟수는 5번이다.
n을 입력하면 박수를 몇번 쳤는지 그 숫자를 출력하라
*/


// [solution 1]
//function odd369Games(num) {
//     num = parseInt(num, 10);
//     let result = 0;
//     let n = 3;
    
//     while(n <= num) {
//         let check = true;
//         let strNum = String(n);
//         for(let i=0; i<strNum.length; i++) {
//             let digit = parseInt(strNum[i],10)
//             if( digit === 0 || digit % 3 !== 0) {
//                 check = false;
//             }
//         }   

//         if(check) result++;
    
//         n += 3;
//     }

//     return result;
// }


//[solution 2]
function odd369Games(num) {
    let result = 0;
    let digitValue = 1;
    let numArr = num.split('');
    const obj = {3:1, 6:2, 9:3};
    const keyArr = Object.keys(obj);
    let temp = [];
    let check = false;
    if(!keyArr.includes(...numArr)){
        for(let i=0; i<numArr.length; i++) {
            let a = numArr[i];
            console.log(numArr[1]);
            if(!keyArr.includes(a)) {
                if(keyArr.filter(x => a>x).length !== 0){
                 a = String(Math.max(...(keyArr.filter(x => a>x))));    
                } else {
                    temp.push(String(Math.max(...(keyArr.map(x => parseInt(x,10))))));
                    if(i === numArr.length - 2 ){
                        break;
                    }
                    continue;
                } 

                if(check){
                    a = String(Math.max(...(keyArr.map(x => parseInt(x,10)))));
                }
                check = true;
            }else {
                check = false;
            }
            
            temp.push(a);
        }    
        console.log(temp);
        numArr = temp;
    }
    

    while(numArr.length !== 0) {
        let a = numArr.pop();
        result += obj[a] * digitValue;
        digitValue *= 3;
    }

    return result;
}
const num = '300';
console.log(odd369Games(num));