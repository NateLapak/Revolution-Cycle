import { faker } from '@faker-js/faker';

const order_data = () => {

    return {
        id: Math.floor(Math.random() * 1001),
        customerID: 2,
        total: faker.finance.amount(),
        // items: Item[item]
    }
}

export default order_data