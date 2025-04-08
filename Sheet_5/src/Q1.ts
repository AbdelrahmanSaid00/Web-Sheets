// Question--1
let ArrayOfString :string[] = ['aba' , 'daba' , 'asadsad' , 'no'];

const unique = ArrayOfString.filter (word=>!word.split('').find((c , index  , ArrayOfString)=> ArrayOfString.indexOf(c)!== index));
console.log(unique);