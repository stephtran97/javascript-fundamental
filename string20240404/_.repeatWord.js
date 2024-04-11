let a = 'Thủy học JS như thế nào ?';

// 14. In ra từ láy tạo từ 1 từ đơn trong chuỗi nhưng từ đầu tiên viết hoa, từ thứ 2 viết thường, vd Thuy thuy, Hoc hoc...
const solution14 = () => {
  const pattern = /[^\p{L}]/gu;
  const array = a.split(' ').map((word) => word.replace(pattern, ''));

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return array.map((word) => capitalize(word) + ' ' + word.toLowerCase());
};
console.log(solution14());
/* 
[
  'Thủy thủy',
  'Học học',
  'JS js',
  'Như như',
  'Thế thế',
  'Nào nào',
  '? ?'
]
*/
