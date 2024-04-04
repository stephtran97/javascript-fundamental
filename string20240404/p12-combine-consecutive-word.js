let a = 'Thủy học JS như thế nào ?';

// 12. In ra 1 từ ghép, tạo bởi 2 từ liên tiếp trong chuỗi, VD: Thuy học, học JS, JS nhu, ...
const solution12 = (str) => {
  const array = str.split(' ');
  return array.map((word, index) =>
    array[index + 1] ? word + ' ' + array[index + 1] : word
  );
};
console.log(solution12(a));
/* [
  'Thủy học', 'học JS',
  'JS như',   'như thế',
  'thế nào',  'nào ?',
  '?'
] */
