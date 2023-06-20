# Revolution Cycle - Techincal Project

This project is designed to be a representation of the work you'll be doing on a day-to-day basis, as well as be an introduction to Svelte/SvelteKit! If you have Next.js or React experience then you'll be able to learn quickly, however I encourage you to learn how to do things *the Svelte way.* Svelte has a lot of handy build in tools such as Readable/Writeable stores and Reactivity Statements, so make use of them! I've given you a choice between 3 prompts for Frontend, Backend, and Full Stack. These all should be about the same amount of work, so I encourage you to **pick one** that plays to your strengths. I designed these prompts to be open ended, as I want to see how **you** tackle problems, however if you need more guidelines or requirements I'd be happy to provide them at no detriment to your application. This is designed to simulate what the job will be like, so if you get stuck please email me! Feel free to put your own creative spin on the project, and add extra features if you have time. I'll also be taking a look at how you use the GitLab repo, so make sure you make your commits and commit messages like you would on the job.

## You may

* Use documentation, stackoverflow, forums, YouTube videos, or any other resource so long as you implement the solution "In your own words". Keep in mind the guide must be for Svelte 3/Sveltekit 1.0 as previous versions had breaking changes.
* Keep the code and host it on your Github **AFTER** round 2 is complete. I appreciate the time you're investing into this, and I want to make sure even if you don't advance, you have something you can use in your portfolio/resume.
* Ask me or other communities for pointers/assistance.
* Use any package/library on NPM that is compatible with Node 16 or newer
* Use TypeScript, although you'll have to set that up yourself (Our codebase uses JavaScript)
* Make calls to external APIs

## You may NOT

* Share your implementation publicly, or with other candidates **BEFORE** round 2 is complete.
* Copy/paste solutions directly from ChatGPT/Stack Overflow. You can use other's work to make your own implementation but I want to see the solution "In your own words."
* Ask someone else to complete the project for you.
* Use Frontend/Backend frameworks other than Svelte/SvelteKit
* Use databases other than PostgreSQL (where applicable)

## Deadline & Extensions

Please have all of your final commits pushed to your fork'd repo no later than **Tuesday June 27th at 9:00 am MST**. I want to keep things fair for all candidates, so I am generally not open to extending the project deadline. This is supposed to be a simulation of how the project is going to go, and we will have a hard deadline. That being said if you have a serious unforeseen circumstance, please reach out to me and we'll come up with a solution that is fair for everyone. If you're not able to complete the project in the available time, don't fret! I'm more interested in seeing how you work and how you go about learning new things.

## Helpful Resources

Don't worry, you wont need all of these, some are only relevant for certain prompts.

* Learn Svelte Interactive - https://learn.svelte.dev/tutorial/welcome-to-svelte
* Svelte Documentation - https://svelte.dev/docs
* SvelteKit Documentation - https://kit.svelte.dev/docs/introduction
* Svelte Discord - https://discord.com/invite/svelte
* PostgreSQL Documentation (For prompt 2 and 3) - https://www.postgresql.org/docs/15/index.html
* node-postgres - https://www.npmjs.com/package/pg
* Faker - https://fakerjs.dev/
* Skeleton UI - https://www.skeleton.dev/
* Lorem Picsum - https://picsum.photos

Make sure to run `npm install` after you've cloned the repo. Then run `npm run dev` to start the developer environment.

## Dependencies

* Node 16 or newer with NPM
* Git
* PostgreSQL (For prompts 2 and 3)

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

# Prompt 2 - Backend

Use PostgreSQL and SvelteKit's server routes to make a REST API for managing products. This is the type for a single product:

```
id: int
name: string
brand: string
price: float
qoh: int
```

In Postrges, create a database with the following name `[your first name]_revolution`. Create a table named `products` using the product type information above to make the table's columns. Place the SQL code you ran to set up the Database and Table in the `migrations.sql` file.

The API should have the following endpoints:

## /products.json?brand=ACME

### GET

Returns a list of all the products in the database as JSON. If the brand URL Search Parameter is provided, it will return only the products that match the brand. If brand is specified and no products match, it will return an Empty array as JSON.

### POST

Creates a new product in the database if the post body is a JSON object with the following attributes:

```
name: string
brand: string
price: float
qoh: int
```

On success it will return the newly entered product as JSON with it's ID. On failure it will return an error, with a status code of 400.

## /products/[id].json

### GET

Returns the product with the matching ID from the database if found, otherwise returns an error with a status code of 404.

### PUT

Updates a product in the database if the post body is a JSON object with one or more the following attributes. Any attribute provided will be updated.

```
name: string
brand: string
price: float
qoh: int
```

On success it will return the newly entered product as JSON with it's ID. On failure it will return an error, with a status code of 400.

### DELETE

Will delete the product from the database if found, otherwise returns an error with a status code of 404.

## Tips

* You can use a tool like Postman to develop/test or you can make a Frontend component to test with fetch
* Place your database connection logic in a class, and reference it in the endpoint functions instead of writing the whole thing in an endpoint function. (Not required, but helpful)
* Make sure to test edge cases like Improper/Invalid POST/PUT bodies.
* Research SvelteKit's env imports, the node-postgres library, Postgres SERIAL type, and URLSearchParams

# Prompt 3 - Full Stack

Implement a shopping app at the route `/store` with a list of 15 products in the main section and a sidebar showing all of the items in your cart. For carts, you can assume the app only ever has 1 user and therefore only 1 cart so there is no need to implement a per-session cart with cookies or JWT. Any product can be added to the cart more than once, so there's no need to implement a quantity selector.

In Postrges, create a database with the following name `[your first name]_revolution`. Create a table named `products` and `cart_items` using the type information below to make the table's columns. Insert a bunch of fake products into the products table before you begin writing code, so the information is ready to be pulled. Place the SQL code you ran to set up the Database and Table as well as inserting the fake products in the `migrations.sql` file.

On the front end, have a button under all of the products named "Add to cart". When you click add to cart, the item will appear in the cart sidebar, with all of the item's information. Each item will have a "remove button" which will remove that single item from the cart when clicked. On the cart sidebar will be a button named "Clear Cart", which will remove all items from your cart. For bonus points, have a cart total that updates as items are added (ignore tax). All 3 cart actions should update the app's state without reloading the page, and communicate that state to the backend where changes are stored in the database. You can user either Server Actions or Server Routes to handle API calls.

### Product

```
id: int
image_url: string
name: string
brand: string
price: float
```

### Cart Item

```
id: int
product_ID: int
```

## Tips

* Research SvelteKit stores, server actions, forms/use:enhance, Postgres SERIAL type, and server routes
* Create a class to manage the cart's state in the database, and reference it in the endpoint functions or actions
* Don't let the short description deceive you, this task will take as long if not longer than the other 2.
