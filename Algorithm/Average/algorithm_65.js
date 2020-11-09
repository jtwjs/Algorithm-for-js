/*문제64: 변형된 리스트

a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 [[1,a], [b,2], [3,c], [d,4]] 이런식으로
a, b 리스트가 번갈아 가며 출력되게 하시오*/

const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

function modifiedList(a, b) {
    let result = [];
    const length = Math.max(a.length, b.length);
    for(let i=0; i<length; i++) {
        if( i%2 !== 0) {
            result.push([`${b[i]},${a[i]}`]);
        } else {
            result.push([`${a[i]},${b[i]}`]);
        }
    }

    return result;
}

console.log(modifiedList(a,b));