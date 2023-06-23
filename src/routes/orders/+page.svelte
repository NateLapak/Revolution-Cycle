<script>
	import Navbar from "../Navbar.svelte";
	import Sidebar from "../Sidebar.svelte";
	import order_data from "./order_data"

	let orders = [];

	// Generates 8 random orders
	for (let i = 0; i < 8; i += 1) {
		let new_order = order_data();
		orders.push(new_order);
	}

	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte';
</script>


<svelte:head>
	<title>Orders</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>

<Navbar />
<Sidebar />

<!-- Order table -->
<div class="my-3">
	<h1 class="text-center text-5xl m-1">Orders</h1>
	<h4 class="text-center text-md">List of orders</h4>
	<section class="flex justify-center my-5">
		<Table striped={true} hoverable={true} class="border-2">
		<TableHead class="border-2">
			<TableHeadCell>Customer ID</TableHeadCell>
			<TableHeadCell>Total</TableHeadCell>
			<TableHeadCell>
			<span class="sr-only"> Edit </span>
			</TableHeadCell>
		</TableHead>

		{#each orders as order}
			<TableBody>
				<TableBodyRow>
				<TableBodyCell>{order.id}</TableBodyCell>
				<TableBodyCell>{order.total}</TableBodyCell>
				<TableBodyCell>
				</TableBodyCell>
				</TableBodyRow>
			</TableBody>
		{/each}
		</Table>
	</section>
</div>