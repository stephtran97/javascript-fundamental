let a = 'Thủy học JS như thế nào ?';

// 3. Đảo ngược chuỗi
const solution3 = (str) => {
  const reverseString = (string) => {
    return string.split('').reverse().join('');
  };
  return str
    .split(' ')
    .reverse()
    .map((word) => reverseString(word))
    .join(' ');
};
console.log(solution3(a)); // ? oàn ếht ưhn SJ cọh yủhT
