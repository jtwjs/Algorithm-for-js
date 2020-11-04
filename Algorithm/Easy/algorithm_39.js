/*문제39: 오타 수정하기
문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성
 */

 /*EX:)
 입력: querty
 출력: euerty
 
 입력: hqllo my namq is hyqwon
 출력: hello my name is hyewon*/

 const str = 'querty';
 const str2 = 'hqllo my namq is hyqwon';

 function convertQtoE(str) {
     const reg = /q/ig;
     let result ='';
    result = str.replace(reg,'e');
    return result;
 }

 console.log(convertQtoE(str));