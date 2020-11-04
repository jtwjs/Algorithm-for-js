/*문제34: sort 구현하기

키가 주어지면 순서대로 제데로 
섰는지 확인하는 프로그램을 작성*/
function getRandomArr() {
    let result = [];
for(let i=0; i<5; i++) {
    result.push(Math.floor(Math.random() *30 + 150));
}
return result;
}
function isRightSort(arr) {
    let sortArr = arr.slice().sort((a,b) => a -b);
    
    console.log(arr);
    console.log(sortArr);
    if(arr === sortArr){
        return 'YES';
    }
        
    return 'NO';
}

console.log(isRightSort(getRandomArr()));