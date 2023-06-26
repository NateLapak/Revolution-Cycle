import {faker} from '@faker-js/faker';

// Genereates data for one item object using faker
const order_item = () => {
    return {
        name: faker.commerce.product(),
        qty: faker.number.int({min: 1, max: 50}),
        price: faker.number.float({min: 0, max: 10000, precision: 0.01}),
    }
}

export default order_item