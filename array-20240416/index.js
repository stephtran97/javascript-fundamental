const a = [1, 3, 2, 5, 4];

a.length; // 5
// Array methods
a.indexOf(2); // 2
a.find((item) => item === 5); // 5
a.includes(3); // true
a.forEach((item) => {
  // do something with each item, return nothing
});
a.filter(item=>{
    return // some condition needs to meet
})
a.every(1) // check if every element of the array is 1. false
a.some(3) // true check if any element of the array is 3
a.push(6) // push 1 element to the end of the array => a = [1, 3, 2, 5, 4, 6]
a.pop() // remove last element of the array => [1,3,2,5]
a.shift() // remove first element of the array =>[3,2,5,4]
a.unshift(2) // add 1 element to the start of the array
a.reverse() // return mutated reversed array a [4,5,2,3,1]
a.splice()
a.slice()
a.join() // return a string created by concatnating array's element
a.toString() 
a.reduce()
a.map()
