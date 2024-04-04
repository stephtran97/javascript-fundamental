let a = 'Thủy học JS như thế nào ?';

// 2. Viết hoa tất cả các từ trong chuỗi

const solution2 = (str) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return str
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
};
console.log(solution2(a)); // Thủy Học JS Như Thế Nào ?
