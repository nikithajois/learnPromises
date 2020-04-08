const request = require("request"); // This library doesnt use promises
module.exports = {
  get
};

function get(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      if (error) {
        //console.error("error:", error); // Print the error if one occurred
        return reject(error);
      }

      if (response.statusCode == 200) {
        return resolve(body);
      }
    }); // request
  });
} // get
