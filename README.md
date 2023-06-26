# Revolution Cycle - Frontend prompt
Here is my website that follows the specifications mentioned in the frontend prompt. I created this website for 
Revolution Cycle, a bicycle company based in Edmonton, Canada. 

# About
I created this website for Revolution Cycle based on the specifications for the frontend prompt. This is my first time 
using Svelte, so I had to take my experience developing in React and use it to learn and understand the differences 
between the two frameworks. I will cover some of the challenges I faced later on, but overall I think that Svelte is a good 
framework that taught me a lot about web development in general.

# Tech Stack
Here are the technologies and libraries I used to create this website.

```
Svelte/SvelteKit - Frontend 
TailwindCSS - CSS and UIs
FakerJS - Library that generates random data
Flowbite - UI component library based on Tailwind

```
# Purpose and Challenges
The purpose of this project was to 
build experience working in another frontend framework 
other than React. The biggest challenge I had was 
using fake data to generate a list of customers and 
orders, then displaying all the info on that specific 
customer or order. Since new data is generated every 
time /customers or /orders renders, I couldn't figure 
out how to send that customer's data to 
/customers [id] or /orders/[id]. I thought that since
I had no database to save this data, I couldn't pass 
down the information from one page to another. So, I
ended up using conditional rendering that only
renders customer or order information if they have 
the same ID.  


