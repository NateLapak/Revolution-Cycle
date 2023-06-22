<script>
	import Navbar from "../Navbar.svelte";
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
</script>

<Navbar />

<svelte:head>
	<title>Customers</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>

<h1 class="text-center">Customers</h1>
<section>

	<Table striped={true} hoverable={true}>
	<TableHead>
		<TableHeadCell>Customer ID</TableHeadCell>
		<TableHeadCell>First name</TableHeadCell>
		<TableHeadCell>Last name</TableHeadCell>
		<TableHeadCell>Email</TableHeadCell>
		<TableHeadCell>
		<span class="sr-only"> Edit </span>
		</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		<TableBodyRow>
		<TableBodyCell>132</TableBodyCell>
		<TableBodyCell>Nathan</TableBodyCell>
		<TableBodyCell>Lapak</TableBodyCell>
		<TableBodyCell>nathan.lapak@gmail.com</TableBodyCell>
		<TableBodyCell>

		</TableBodyCell>
		</TableBodyRow>
	</TableBody>
	</Table>
</section>