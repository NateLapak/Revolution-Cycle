<script>
	import { page } from '$app/stores';
    import customer_data from '../routes/customers/customer_data';
	import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell} from 'flowbite-svelte';
    import CustomerId from "../routes/customers/[id]/customer_id.svelte"

	let customers = [];
	
	// Generates one customer with random data
	const generate_customer = () => {
		let new_customer = customer_data();
		customers.push(new_customer)
	}

	// Randomly generate 10 customers that will be displayed in the customer table
	for (let i = 0; i < 10; i += 1) {
		generate_customer()
	}

	// Find the current path 
	let url = $page.url.pathname;
	let isCustomerId = false
	let values_for_customer = [];

	// Check to see if the route is supposed to render a specific customer's data
	if (url.length > 10) {
		isCustomerId = true

		let customerID = url.split("/")[2]
		customers.forEach((customer) => {
			if (customer.id == customerID) {
				values_for_customer.push(customer)
			}
		})
	}
</script>

<!-- Customer table -->
<section class="flex justify-center my-5">
		
	<!-- Render table on /customers/[id] -->
	{#if isCustomerId}
		<CustomerId customer={values_for_customer}/>
	{/if}

	<!-- Render table on /customers -->
	{#if isCustomerId == false}
		<Table striped={true} hoverable={true} class="border-2">
			<TableHead class="border-2">
				<TableHeadCell>Customer ID</TableHeadCell>
				<TableHeadCell>First name</TableHeadCell>
				<TableHeadCell>Last name</TableHeadCell>
				<TableHeadCell>Email</TableHeadCell>
				<TableHeadCell>
				<span class="sr-only"> Edit </span>
				</TableHeadCell>
			</TableHead>

			{#each customers as customer}
			<TableBody>
				<TableBodyRow>
					<TableBodyCell><a href="/customers/{customer.id}">{customer.id}</a></TableBodyCell>
					<TableBodyCell>{customer.firstName}</TableBodyCell>
					<TableBodyCell>{customer.lastName}</TableBodyCell>
					<TableBodyCell>{customer.email}</TableBodyCell>
					<TableBodyCell>
				</TableBodyCell>
				</TableBodyRow>
			</TableBody>
			{/each}
		</Table>
		
	{/if}
		
</section>
