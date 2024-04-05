let a = 'hoc JS don gian';
const obj = {
  hoc: 'learn',
  JS: 'JavaScript',
  'don gian': 'simple',
};
// 'Hoc JS don gian' => 'Learn JavaScript simple'
// 5 cach
const translate = (str)=>{
  let result = str
  for (let key in obj){
    if (a.includes(key)){
       result= result.replaceAll(key,obj[key])
    }
  }
  return result;
}
console.log(translate(a))