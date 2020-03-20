const faker = require('faker'); // http://marak.github.io/faker.js/
const users = []
for (let id = 0; id < 13; id++) {
  users.push({
    "id": id,
    "name": faker.name.firstName(),
    "lastname": faker.name.lastName(),
    "phone": faker.phone.phoneNumber(),
    "email": faker.internet.email()
  });
}

module.exports = users