<script>
	import Navbar from "../Navbar.svelte";
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte';
</script>

<Navbar />
<h1 class="text-center">Orders page</h1>

<svelte:head>
	<title>Orders</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>

<section>

	<Table striped={true} hoverable={true}>
	<TableHead>
		<TableHeadCell>Customer ID</TableHeadCell>
		<TableHeadCell>Product sold</TableHeadCell>
		<TableHeadCell>Total</TableHeadCell>
		<TableHeadCell>
		<span class="sr-only"> Edit </span>
		</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		<TableBodyRow>
		<TableBodyCell>132</TableBodyCell>
		<TableBodyCell>Snowboard</TableBodyCell>
		<TableBodyCell>500$</TableBodyCell>
		<TableBodyCell>

		</TableBodyCell>
		</TableBodyRow>
	</TableBody>
	</Table>
</section>