let a = 'Thủy học JS như thế nào ?';

// 15. Đổi chỗ từ "học" và từ "thế"
const solution15 = () => {
  const array = a.split(' ');

  return array
    .map((word) => {
      if (word === 'học') return 'thế';
      if (word === 'thế') return 'học';
      return word;
    })
    .join(' ');
};
console.log(solution15()); // Thủy thế JS như học nào ?
// chưa tìm ra cách mới
