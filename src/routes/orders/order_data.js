import { faker } from '@faker-js/faker';
import order_item from './order_item';
let item = []

// Creates 5 random items and pushes it to the items array
for (let i = 0; i < 5; i += 1) {
    let new_item = order_item()
    item.push(new_item)
}

// Generates one order object using faker
const order_data = () => {
    return {
        id: Math.floor(Math.random() * 26) + 1,
        customerID: Math.floor(Math.random() * 26) + 1,
        total: faker.finance.amount(),
        items: item[0].name
    }
}

export default order_data