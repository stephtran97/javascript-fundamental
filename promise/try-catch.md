# Try catch working control

- Use try...catch only for handling exceptions that you can't prevent with regular conditions.
- Avoid using try...catch for flow control. It's less efficient and can make the code harder to read.

```js
try {
  if (condition) {
    throw new Error('Custom error message');
  }
  return result;
} catch (error) {
  // Handle the error
  throw new Error('An error occurred:', error.message);
}
```
