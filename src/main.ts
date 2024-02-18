import { faker } from '@faker-js/faker';

function generateUser(length:number=50):{}[] {
    let users:{}[]=[]

    for (let i = 0; i < length; i++) {
        users.push({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zip: faker.location.zipCode(),
            country: faker.location.country(),
        })
    }
    return users
}

console.log(generateUser())
   