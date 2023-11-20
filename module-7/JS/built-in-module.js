const fs = require("fs");

fs.readFile("./text/read.txt", (err, data) => {
  if (err) {
    throw err;
  }
});
