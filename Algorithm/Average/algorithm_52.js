/*문제52: quick sort */

function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i=1; i<arr.length; i++) {
        if(pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot,quickSort(right));
}

const array = [43,8,4,23,9,29,3];

console.log(quickSort(array));