/*문제56: 객체의 함수 응용

다음의 객체가 주어졌을 때 한국의 면적과
가장 비슷한 국가와 그 차이를 출력하시오
*/

const nationWidth = {
    Korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900
};

const isNotNation = new Error('나라 이름을 잘못 입력했습니다.');
const nation = 'korea';

function getNationOfSimilarArea(nation) {
    const entry = Object.entries(nationWidth);
    const country = {};
    const isNation = nationSetting(entry, country);

    if(!isNation) throw isNotNation;

    return entry
        .filter( x => {
         return x[0] !== country.name;})  
        .reduce( (acc, a) => {
         return Math.abs(acc[1] - country.size) > Math.abs(a[1] - country.size) ?  a : acc;
         },['',0] )
         .map( x => {
             return typeof x === 'number' ? Math.abs(x - country.size) : x;
         });

    
}

function nationSetting(entry, obj) {
    let result = false;

    for (let country of entry) {
        if(country[0].toLocaleLowerCase() === nation.toLocaleLowerCase()){
            result = true;
            obj.name = country[0];
            obj.size = country[1];
        }
    }
    return result;
}

console.log(getNationOfSimilarArea(nation));