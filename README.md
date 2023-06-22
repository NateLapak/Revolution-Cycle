# Revolution Cycle - Frontend prompt
Here is my website that follows the specifications mentioned in the frontend prompt.


# Prompt 1 - Frontend

Create a Dashboard for staff to use to manage the backend of the site. The dashboard will need the pages listed below, and navigating between `/orders` and `/customers` should be taken care of by a navbar that is visible on all pages ***except*** the login page. Feel free to use UI libraries to make things look clean. Feel free to also add dummy UI elements to represent features a dashboard user would want. Below are the type of the customer, order, and order item objects you should use

## Types

### Customer

```
id: int
firstName: string
lastName: string
phone: string
email: string
address: string
city: string
province: string
country: string
postal: string
orders: Order[]
```

### Order

```
id: int
customerID: int
total: float
items: Item[]
```

### Order Item

```
name: string
qty: int
price: float
```

## Login Page

At the route `/login`, provide a prompt for the user to log in with a staff username and password. Don't worry about any authentication logic, just assume any information entered is correct. You can implement a dummy server endpoint or simulate a request with a timeout. When you "login" it will take you to the /orders page.

## Customers and Customer Pages

At the route `/customers`, implement a list of active customers. Feel free to use libraries such as Faker to generate fake customer information, or generate/use your own. On this page, you don't need to display all the customer information per customer, just what would be useful at a glance like First/Last name, email, etc. When you click on a customer in the list, it will take you to their profile

At the route `/customers/[id]`, implement a page that shows a profile for the registered customer. this page should display All the info associated with a customer. Below the customer information, have a list of orders the customer has made. When you click on one, it will take you to the page for that order ID described below.

## Orders and Order Page

At the route `/orders`, implement a list of all customer orders. When you click on an order in the list, it takes you to the order matching that ID. On this page, you don't need to display all the order information per order, just what would be useful at a glance ID and total.

At the route `/orders/[id]`, display all the information for that order, including the total and all items. The order should have a button called "View Customer" that takes you to the customer's profile based on their ID

## Tips

* Break each piece down into components, use component libraries to help where needed.
* Create order and customer objects with fake data, but store it somewhere and reference it in a page/component, don't generate it right in the HTML. Pretend like you're consuming data that you already fetched from an API.
* Research Readable/Writable stores, Templates, and Routing. You don't need to use all of them, but they will be helpful.
