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
  for (let key in dictionary) {
    if (str.includes(key)) {
      result = result.replaceAll(key, dictionary[key]);
    }
  }
  return result;
};
console.log(translate(a, obj));
