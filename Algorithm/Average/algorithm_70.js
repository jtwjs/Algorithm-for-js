/*문제70: 행렬 곱하기

행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 
곱할 수 있다면  그 결과를 출력하고, 곱할 수 없다면 
-1을 출력하는 프로그램을 만드시오
*/

const a = [[1,2], [2,4]];
const b = [[1,0], [0,3]];

function matrixMultiple(a,b) {
    let result = [];
    if(a[0].length !== b.length){
        return -1;
    } else {
        for (let i=0; i<a.length; i++) {
            let row = [];
            for(let j=0; j<a.length; j++) {
                let x = 0;
                for(let k=0; k<a.length; k++){
                    x += a[i][k] * b[k][j];
                }
                row.push(x);
            }
            result.push(row);
        }
    }

    

    return result;
}

console.log(matrixMultiple(a,b));