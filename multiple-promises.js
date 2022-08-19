const taskOne = new Promise((resolve, reject) => {
  resolve('Task 1 completed');
});

const taskTwo = new Promise((resolve, reject) => {
  resolve('Task 2 completed');
});

const taskThree = new Promise((resolve, reject) => {
  resolve('Task 3 completed');
});

Promise.all([ // using 'race' instead of 'all' will return once first task is completed
  taskOne,
  taskTwo,
  taskThree
]).then((messages) => {
  console.log(messages);
});
