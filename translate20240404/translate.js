let a = "Hoc JS don gian";
const arr = ["Hoc", "JS", "don gian"];

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

const translate = (word, language) => {
  const dictionary = globalDictionary[language];
  //  Cach 1
  if (dictionary.hasOwnProperty(word)) {
    return dictionary[word];
  } else if (dictionary.hasOwnProperty(word.toLowerCase())) {
    return toCapitalize(dictionary[word.toLowerCase()]);
  } else return word;
};

const result = arr.reduce(
  (acc, curr) => (acc += ` ${translate(curr, "en")}`),
  ""
);
console.log(result);
