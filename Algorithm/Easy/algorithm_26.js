/*문제26: 행성문제2
행성의 한글이름을 입력하면 영어 이름을 반환하는 프로그램을 만드시오 */

const planet = {
    수성: 'Mercury',
    금성: 'Venus',
    지구: 'Earth',
    화성: 'Mars',
    목성: 'Jupiter',
    토성: 'Saturn',
    천왕성: 'Uranus',
    해왕성: 'Neptune'
};

const name = '지구';

console.log(planet[name]);