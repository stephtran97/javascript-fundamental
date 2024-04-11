const order1 = {
  key: "o1",
  name: "Cocacola",
  price: 10,
  amount: 2,
};
const order2 = {
  key: "o2",
  name: "Redbull",
  price: 15,
  amount: 3,
};
const order3 = {
  key: "o3",
  name: "Snack",
  price: 5,
  amount: 4,
};
const orders = [order1, order2, order3];

const saveToLocal = (value) => {
  localStorage.setItem("ORDERS", JSON.stringify(value));
};
const getFromLocal = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
const calculateTotal = (orders) => {
  return orders.reduce((acc, cur) => (acc += cur.price * cur.amount), 0);
};

saveToLocal(orders);

const result = getFromLocal("ORDERS");

console.log(calculateTotal(result));
