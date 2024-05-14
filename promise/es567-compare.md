# ES5/ES6/ES7 comparison

## ES5 2009:

## ES6 2015:

- arrow function

  >

  ```js
  const exampleFunction = () => {
    // do something
  };
  ```

- class syntax

  >

  ```js
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    talk() {
      // do something
    }
  }
  ```

- template literal

  >

  ```js
  const randomVar = 'this is a random var';
  const str = `You can embed expression ${
    1 > 0 ? 'expr' : 'another expr'
  } and variables inside a string template ${randomVar} `;
  ```

- let, const: block scope instead of function scope var

  >

  ```js
  // outer scope
  // cannot access a and b
  const f = () => {
    let a = 1;
    const b = 2;
    // we can only access a and b in this block
    console.log(a); // 1
    console.log(b); // 2
  };
  // cannot access a and b
  console.log(a); // error
  console.log(b); // error
  ```

- spread + rest operator

  >

  ```js
  const object = {
    prop1: 1,
    prop2: 'asdf'
  };
  const arr = [1, 2, 34, 5];
  console.log(...arr); // 1, 2, 34, 5
  console.log({ ...object });
  const [a, b, ...rest] = arr;
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [34,5]
  ```

- destructuring

  >

  ```js
  const object = {
    prop1: 1,
    prop2: 'asdf'
  };
  const { prop1, prop2 } = object;
  console.log(prop1); // 1
  console.log(prop2); // asdf
  ```

- promises

  >

  ```js
  const pr = new Promise((resolve, reject) => {
    const randN = Math.random();
    if (randN > 0.5) resolve(randN);
    reject({ msg: 'Random number is lower than 0.5' });
  });
  pr.then((res) => {
    console.log('Result >>', res);
  }).catch((err) => {
    console.log(err);
  });
  ```

- modules import export

  >

  ```jsx
  import React from 'React';
  const App = () => {
    return <>This is an example</>;
  };
  export default App;
  ```

- default params

  >

  ```js
  const testFunc = (a, b = 1) => {
    return a * b;
  };
  console.log(testFunc(8)); // 8
  console.log(testFunc(8, 2)); // 16
  ```

- object literal extensions
  >
  ```js
  const age = 23;
  const name = 'Stephen';
  const p = { age, name };
  console.log(p); // {age:23, name:'Stephen'}
  ```

## ES7 2016:

- array.includes

  >

  ```js
  const arr = [1, 2, 34, 5];
  console.log(arr.includes(34)); // true
  ```

- async keyword

  >

  ```js
  const fetchData = async () => {
    const res = await fetch('https://www.google.com');
    // Consume the promise ...
  };
  ```

- object.values

  >

  ```js
  const object = {
    prop1: 1,
    prop2: 'string'
  };
  console.log(Object.values(object)); // [1,'string']
  ```

- object.entries

  >

  ```js
  const object = {
    prop1: 1,
    prop2: 'string'
  };
  console.log(Object.entries(object)); // [['prop1',1],['prop2','string']]
  ```

- exponentiation operator '\*\*'
  >
  ```js
  const x = 2 ** 3;
  console.log(x === 2 * 2 * 2); // true
  ```
