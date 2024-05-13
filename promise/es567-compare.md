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

  > example code

- modules import export

  > example code

- default params

  > example code

- object literal extensions
  > example code

## ES7 2016:

- array.includes

  > example code

- async keyword

  > example code

- object.values

  > example code

- object.entries
  > example code
- exponentiation operator '\*\*'
  > example code
