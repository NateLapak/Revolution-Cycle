<script>
	import { each } from "svelte/internal";
	import Navbar from "../Navbar.svelte";
	import Sidebar from "../Sidebar.svelte";
	import customer_data from "./customer_data.js"

	let customers = [];

	// Randomly generate 12 customers that will be used in the customer list
	for (let i = 0; i < 12; i += 1) {
		let new_customer = customer_data()
		customers.push(new_customer)
	}

	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte';
</script>


<svelte:head>
	<title>Customers</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>

<Navbar />
<Sidebar/>

<!-- Customer table -->
<div class="my-3">
	<h1 class="text-center text-5xl">Customers</h1>
	<h4 class="text-center text-md">Entire list of customers</h4>
	<section class="flex justify-center my-5">
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
				<TableBodyCell>{customer.id}</TableBodyCell>
				<TableBodyCell>{customer.firstName}</TableBodyCell>
				<TableBodyCell>{customer.lastName}</TableBodyCell>
				<TableBodyCell>{customer.email}</TableBodyCell>
				<TableBodyCell>
			</TableBodyCell>
			</TableBodyRow>
		</TableBody>
		{/each}
		</Table>
	</section>
</div>
