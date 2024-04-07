let a = "Hoc JS don gian";
const obj = {
  hoc: "learn",
  JS: "JavaScript",
  "don gian": "simple",
};
const globalDictionary = {
  en: obj,
};
// 'Hoc JS don gian' => 'Learn JavaScript simple'
// 5 cach
const toCapitalize = (str) => {
  return str[0].toUpperCase() + str.substring(1);
};

const translate = (str, language) => {
  let result = str;
  const dictionary = globalDictionary[language];
  //  Cach 1
  for (let key in dictionary) {
    const capitalizedKey = toCapitalize(key);
    const capitalizedValue = toCapitalize(dictionary[key])

    if (str.includes(capitalizedKey)) {
      result = result.replaceAll(capitalizedKey, capitalizedValue);
    } else {
      result = result.replaceAll(key, dictionary[key]);
    }
  }

  // Cach 2
  // const keys = Object.keys(dictionary);
  // keys.forEach(key=>{
  //   const capitalizedKey = toCapitalize(key);
  //   const capitalizedValue = toCapitalize(dictionary[key])
    
  //   if (str.includes(capitalizedKey)) {
  //     result = result.replaceAll(capitalizedKey, capitalizedValue);
  //   } else {
  //     result = result.replaceAll(key, dictionary[key]);
  //   }
  // })

  // Cach 3
  // const entries = Object.entries(dictionary);
  // entries.forEach(entry=>{
  //   const capitalizedKey = toCapitalize(entry[0]);
  //   const capitalizedValue = toCapitalize(entry[1])
    
  //   if (str.includes(capitalizedKey)) {
  //     result = result.replaceAll(capitalizedKey, capitalizedValue);
  //   } else {
  //     result = result.replaceAll(entry[0], entry[1]);
  //   }
  // })
  return result;
};
console.log(translate(a, "en"));
