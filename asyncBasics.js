/* In this we show the basic USAGE of a async await */

const axios = require("axios");

/*
async function main() {
  console.log("Getting user1 info");
  try {
    let resp1 = await axios.get("https://reqres.in/api/users/1");
    let user1 = resp1.data.data;
    console.log(user1);
  } catch (err) {
    console.log("sorry we cldnt get the data");
  }
}
main(); */

async function getuserInfoParallel() {
  try {
    let p1 = axios.get("https://reqres.in/api/users/1"); // returns a promise p1
    let p2 = axios.get("https://reqres.in/api/users/2"); // returns a promise p2
    let usersInfo = await Promise.all([p1, p2]);
    let user1 = usersInfo[0].data.data;
    console.log(user1);
    let user2 = usersInfo[1].data.data;
    console.log(user2);
  } catch (err) {
    console.log("sorry we cldnt get the data");
  }
}

getuserInfoParallel();
