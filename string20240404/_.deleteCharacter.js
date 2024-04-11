let a = 'Thủy học JS như thế nào ?';

// 11. Xoá bỏ tất cả các chữ cái "h" trong chuỗi
const solution11 = (str) => {
  return str.replaceAll('h', '');
};
console.log(solution11(a)); // Tủy ọc JS nư tế nào ?
// loop each word then replace h with ''
// split('h').join('')
// replaceAll('h', '')
