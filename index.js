const { faker } = require('@faker-js/faker');

let  createRandomUser=()=> {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

console.log(createRandomUser());