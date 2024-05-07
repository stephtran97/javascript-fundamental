# Promise
* Promise is used to execute the asynchoronous action
* Promise have 3 states: pending, fulfilled or rejected:
   - pending: async function is still doing and no judgements can be made about promise's outcome
   - fulfilled: async operation has been succeeded 
   - rejected: async operation has been failed
## Basic

### Syntax

```
  const promise = new Promise ((resolve, reject) => {
  // if some condition resolve the promise
  // else reject the promise
  })
```
- resolve, reject: used to change the state of the promise to 'fulfilled' or 'rejected'

### then() method
- used to execute a function when a promise is resolved or rejected
- accept 2 arguments are 2 callback to execute when the promise is resolved/rejected
```
  promise.then(onFulfilled, onRejected)
```

## Chaining
- There are basically three possible outcomes of firing the callback passed to then()
    - Returning a non-promise value : Regardless of whenever the callback fires, if it returns a non-promise value, it will fulfill the corresponding derived promise with that value.
    - Throwing an exception: If the callback throws an exception - for example throw new Error("Sorry") - the returned promise is rejected with that value (or better to say, with that reason).
    - Returning a promise: If the returned promise fulfills, the derived promise fulfills too; if it's rejected, the derived promise is rejected too; and if it's pending, the derived promise is also put in the pending state.
  
## Error Handling
- Error handling in JavaScript is usually done with two things: events and conditional statements.
```
  function Promise(executor) {
    // invoke the executor function
    try { executor(); }
    catch(e) { reject(e); }
  }
```
### Conventional catching
```
  var p = new Promise(function(resolve, reject) {
    someAsyncOperation();
  }).
  then(function(data) {
    someOtherAsyncOperation();
  }).
  then(function(data) {
    someOtherAsyncOperation2();
  }).
  then(null, function(error) {
    alert("An error occurred: " + error);
  });
```

## async/await syntax ES6
- ES6 provide a syntax to replace the then() method: async/await


