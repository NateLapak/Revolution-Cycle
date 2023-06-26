import { faker } from '@faker-js/faker';
import order_data from '../orders/order_data';

// Generates data for one customer object using faker
const customer_data = () => {

    let order = order_data()
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()

    return {
        id: Math.floor(Math.random() * 26),
        firstName: firstName,
        lastName: lastName,
        phone: faker.phone.number("780-###-####"),
        email: faker.internet.email(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        province: faker.location.state(),
        country: faker.location.country(),
        postal: faker.location.zipCode(),
        orders: order.items
    }

}

export default customer_data