/*문제17: 놀이기구 키 제한
입력으로 키가 주어지면 키가 150이 넘으면 YES
넘지않으면 NO를 출력하는 프로그램을 작성하시오 */

const height = Math.floor((Math.random() * 50)+ 140);
function heightLimit(num) {
    if(num < 150) {
        return 'NO';
    }
    return 'YES';
}

console.log(heightLimit(height));