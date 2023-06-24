import { faker } from '@faker-js/faker';
import order_item from './order_item';
let item = []

for (let i = 0; i < 5; i += 1) {
    let new_item = order_item()
    item.push(new_item)
}

const order_data = () => {
    return {
        id: Math.floor(Math.random() * 101),
        customerID: 2,
        total: faker.finance.amount(),
        items: item[0].name
    }
}

export default order_data