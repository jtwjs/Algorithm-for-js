/*문제10: 별 찍기*/

//input: 5
function drawStar() {
    const num = 5;
    let blank = num-1;
    let result;
    for(let i=0; i<num; i++ ) {
        result = '';
        result += ' '.repeat(blank-i);
        for(let j=0; j<i*2-1; j++ ) {
            result += '*';
        }
        console.log(result);
    }
}

drawStar();

/*output
    *
   ***
  *****
 *******
**********/

