// Create a Promise that resolves immediately

let p = Promise.resolve(2);
p.then(function(x) {
  console.log(x);
});

// Create a Promise that resolves after 2 secs

let mypromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    //reject("My Promise is Rejected");
    resolve("My promise is resolved");
  }, 2000); // setTimeout
}); // Promise

mypromise
  .then(function(x) {
    console.log(x); // executes if promise is resolved
  })
  .catch(function(err) {
    console.log(err); // Execites if promise is rejected.
  });
