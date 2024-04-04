let a = 'Thủy học JS như thế nào ?';

// 5. Cắt chuỗi thành các phần, ngăn cách nhau bởi từ "JS"
const solution5 = (str) => {
  return str.split('JS');
};
console.log(solution5(a)); // [ 'Thủy học ', ' như thế nào ?' ]
