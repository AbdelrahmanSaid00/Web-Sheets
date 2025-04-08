//Question--2
let arrSwap = 'abcdefg';
function aSwapS(e : string) {
    let char = e.split('');
    for(let i = 0 ; i+2 < char.length ;i+=4) {
        [char[i], char[i + 2]] = [char[i + 2], char[i]];
    }
    return char.join('');
}
console.log(aSwapS(arrSwap));
