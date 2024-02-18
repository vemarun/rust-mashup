"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
function generateUser(length = 50) {
    let users = [];
    for (let i = 0; i < length; i++) {
        users.push({
            name: faker_1.faker.person.fullName(),
            email: faker_1.faker.internet.email(),
            phone: faker_1.faker.phone.number(),
            address: faker_1.faker.location.streetAddress(),
            city: faker_1.faker.location.city(),
            state: faker_1.faker.location.state(),
            zip: faker_1.faker.location.zipCode(),
            country: faker_1.faker.location.country(),
        });
    }
    return users;
}
console.log(generateUser());
