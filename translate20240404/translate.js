let a = "hoc JS don gian";
const obj = {
  hoc: "learn",
  JS: "JavaScript",
  "don gian": "simple",
};
// 'Hoc JS don gian' => 'Learn JavaScript simple'
// 5 cach
const translate = (str, dictionary) => {
  let result = str;
  //  Cach 1
  for (let key in dictionary) {
      result = result.replaceAll(key, dictionary[key]);
  }

  // Cach 2
  // const keys = Object.keys(dictionary);
  // keys.forEach(key=>{
  //   result = result.replaceAll(key,dictionary[key])
  // })
  
  // Cach 3
  // const entries = Object.entries(dictionary);
  // entries.forEach(entry=>{
  //   result = result.replaceAll(entry[0],entry[1])
  // })
  return result;
};
console.log(translate(a, obj));
