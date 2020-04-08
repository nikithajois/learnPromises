/* In this we show the basic USAGE of a promise */

const axios = require("axios");
// 1 . Make a request to get all the users
// // axios module returns a promise
// let p = axios.get("https://reqres.in/api/users");

// p.then(function(response) {
//   console.log("success");
//   console.log(response.data);
// }).catch(function(error) {
//   console.log("Server rejected");
//   console.log(error);
// });

// p.then(function() {
//   // SMS server
//   console.log("Here is second use of the same promise");
// });

// p.then(function() {
//   // Printer
//   console.log("Here is third  use of the same promise");
// });

// 1a . Make a request to get all the users,using chaining
// axios
//   .get("https://reqres.in/api/users")
//   .then(function(response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     // handle error
//     console.log(error);
//   });

// 2. Make a resuest to get 1 user

// let p = axios.get("https://reqres.in/api/users/2");

// console.log(p);

// p.then(function(response) {
//   console.log("success");
//   console.log(response.data);
// }).catch(function(error) {
//   console.log("Server rejected");
//   console.log(error);
// });

//2a. Make a resuest to get 1 user
axios
  .get("https://reqres.in/api/users/1")
  .then(function(response) {
    // handle success
    console.log(response.data);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });

//  3. Error Case Lets try to get user id of -1
// let p = axios
//   .get("https://reqres.in/api/users/-1")
//   .then(function(response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function(error) {
//     // handle error
//     console.log("Got Error Response from the server");
//     console.log(error.response.status);
//   });

// Getting info of 3 users simultaneously.

// let p = axios.get("https://reqres.in/api/users/1");

// let q = axios.get("https://reqres.in/api/users/2");

// let r = axios.get("https://reqres.in/api/users/3");

// Promise.all([p, q, r])
//   .then(function(response) {
//     console.log("success from server");
//     console.log(response[0].data);
//     console.log(response[1].data);
//     console.log(response[2].data);
//   })
//   .catch(function(error) {
//     console.log("Server rejected");
//     console.log(error);
//   });

//  5. Getting info of 3 users simultaneously,with a error(userid of -3)

// let p = axios.get("https://reqres.in/api/users/1");
// let q = axios.get("https://reqres.in/api/users/2");
// let r = axios.get("https://reqres.in/api/users/222222");

// Promise.all([p, q, r])
//   .then(function(response) {
//     console.log("success from server");
//     console.log(response[0].data);
//     console.log(response[1].data);
//     console.log(response[2].data);
//   })
//   .catch(function(error) {
//     console.log("Server rejected");
//     console.log(error);
//   });
