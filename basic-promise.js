let p = new Promise(function(resolve, reject) {
  // do something

  if(true) { // if good condition
    resolve('Success');
  } else {
    reject('Failure');
  }
});

p.then(function(result) {
  /* do something with result */
}).catch(function() {
  /* error handling */
}).finally(function() {
  /* executes no matter what */
});
