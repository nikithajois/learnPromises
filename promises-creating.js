var myaxios = require("./myAxios");

// Make a resuest to get 1 user

// p is the promise returned by myaxios.get
let p1 = myaxios.get("https://reqres.in/api/users/2");

console.log("promise 1 " + p1); // state of promise p is pending.

p1.then(function(response) {
  console.log("success");
  console.log(response);
}).catch(function(error) {
  console.log("Server rejected");
  console.log(error);
});

// p is the promise returned by myaxios.get
let p2 = myaxios.get("https://reqres.in/api/users/2");

p2.then(function(response) {
  console.log("success");
  console.log(response);
}).catch(function(error) {
  console.log("Server rejected");
  console.log(error);
});
