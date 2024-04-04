let a = 'Thủy học JS như thế nào ?';

// 13. In ra tổ hợp từ ghép 2 tạo bởi 2 từ bất kì trong chuỗi ko theo thứ tự, ko trùng nhau. Vd: Thuy nao, the hoc,...
const solution13 = (str) => {
  const array = str.split(' ');
  const getRandomDifferentIndex = (arrayLength, index) => {
    let r = Math.floor(Math.random() * arrayLength);
    while (r === index) {
      r = Math.floor(Math.random() * arrayLength);
    }
    return r;
  };
  return array.map((word, index) => {
    const randomIndex = getRandomDifferentIndex(array.length, index);
    return word + ' ' + array[randomIndex];
  });
};
console.log(solution13(a));
