// Homework:
// 1.Viet 1 promise cung doi 3~4 API va tra ve 1 lan
// 2. Dung ES6, ES7 cho bai tap 1 (async await)
// Mo ta luong chay
// So sanh ES5 vs ES6/ES7

// Chu y: Promise.all
// Note keywords theo roadmap; vi du cho tung keywords

const getUser = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await res.json();
  const username = data.username;
  if (username) return username;
  throw new Error('User not found');
};
const getPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  const title = data.title;
  if (title) return title;
  throw new Error('Post not found');
};

const getComment = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments/1'); // promise
  const data = await res.json(); // promise
  const name = data.name; // data
  if (name) return name;
  throw new Error('Comment not found');
};

const waitAll = async () => {
  try {
    const result = await Promise.all([getUser(), getPost(), getComment()]);
    return result;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
console.log(waitAll());

// 1. Mô tả luồng từng dòng thì dữ liệu đang là gì (đã ra dữ liệu nguyên thủy chưa hay vẫn là Promise)

// 2. So sánh ES5, ES6, ES7
// 3. Mô tả Try catch hoat dong nhu the nao trong all function (luong xu ly loi ntn: throw Error)
// 4. BT thêm: Tìm hiểu ở các dự án Git/cty: Cấu hình axios; xử lý try catch (handle error); handle data theo status code;
