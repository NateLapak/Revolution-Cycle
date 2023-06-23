import { faker } from '@faker-js/faker';

const customer_data = () => {
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()


    return {
        id: Math.floor(Math.random() * 1001),
        firstName: firstName,
        lastName: lastName,
        phone: faker.phone.number(),
        email: faker.internet.email({firstName, lastName}),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        // province: fakerEN_CA.location.state(),
        country: faker.location.country(),
        postal: faker.location.zipCode(),
        // orders: Order[order]
    }
}

export default customer_data