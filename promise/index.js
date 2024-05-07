// Homework:
// 1.Viet 1 promise cung doi 3~4 API va tra ve 1 lan
// 2. Dung ES6, ES7 cho bai tap 1 (async await)
// Mo ta luong chay
// So sanh ES5 vs ES6

// Chu y: Promise.all
// Note keywords theo roadmap; vi du cho tung keywords

const getUser = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await res.json();
  const username = data.username;
  return username;
};
const getPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  const title = data.title;
  return title;
};

const getComment = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments/1');
  const data = await res.json();
  const name = data.name;
  return name;
};

const waitAll = async () => {
  try {
    const result = await Promise.all([getUser(), getPost(), getComment()]);
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
console.log(waitAll());
