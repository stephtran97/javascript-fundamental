let a = 'Thủy học JS như thế nào ?';

// 8. Đếm xem trong chuỗi có bao nhiêu chữ cái "t"?
const solution8 = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 't') count++;
    continue;
  }
  return count;
};
// split('t').length
console.log(solution8(a)); // 1
