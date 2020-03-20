const fs = require('fs');
const videos = require('./videos');
const users = require('./users');

const jsonContent = {
  videos,
  users
}

fs.writeFile(`${__dirname}/db.json`, JSON.stringify(jsonContent), 'utf8', function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});