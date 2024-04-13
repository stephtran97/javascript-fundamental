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

const saveToCookies = (value) => {
  if (typeof browser === "undefined") {
    var browser = chrome;
  }
  function setCookie(tabs) {
    browser.cookies.set({
      url: tabs[0].url,
      name: "ORDERS",
      value: JSON.stringify(value),
    });
  }
  let getActive = browser.tabs.query({ active: true, currentWindow: true });
  getActive.then(setCookie);
};
const getFromCookies = (key) => {
  if (typeof browser === "undefined") {
    var browser = chrome;
  }
  function getCookie(tabs) {
    return browser.cookies.get({
      url: tabs[0].url,
      name: key,
    });
  }
  let getActive = browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  const cookie = getActive.then(getCookie);
  return JSON.parse(cookie);
};
const calculateTotal = (orders) => {
  return orders.reduce(
    (acc, cur) => (acc += Number(cur.price) * Number(cur.amount)),
    0
  );
};

saveToCookies(orders);

const result = getFromCookies("ORDERS");

console.log(calculateTotal(result));
