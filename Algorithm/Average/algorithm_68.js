/*문제68: 버스 시간표

학교가 끝난 지원이는 집에 가려고 합니다.
학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이
몇분 남아있는지 알려주는 프로그램을 만들고 싶다.

버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 
얼마나 남았는지 알려주는 프로그램을 만들어라

- 버스 시간표와 현재 시간이 입력으로 주어짐
- 출력 포맷은 "00시 00분"입니다.
  만약 1시간 3분이 남았다면 "01시간 03분"으로 출력
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면
  "지나갔습니다."라고 출력*/

const busTimeTable = ["16:30", "17:02", "22:13", "24:02"];

function busArrivalInfo(arr) {
    const currentTime = new Date();
    const currentMinute = currentTime.getHours()*60 + currentTime.getMinutes();
    let result = [];
    for(let clock of arr) {
        const other = clock.split(':').map( x => parseInt(x, 10));
        const otherMinute = other[0]*60 + other[1];
        if( currentMinute > otherMinute) {
            result.push('지나갔습니다.');
        } else {
            const differHour = Math.floor((otherMinute - currentMinute)/60);
            const differMinute = Math.floor((otherMinute - currentMinute)%60);
            result.push(`${String(differHour).padStart(2,'0')}시 ${String(differMinute).padStart(2,'0')}분 남았습니다.`);
        }
        
    }
    
    return result;
}

console.log(busArrivalInfo(busTimeTable));