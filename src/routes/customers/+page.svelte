<script>
	import Navbar from "../Navbar.svelte";
	import Sidebar from "../Sidebar.svelte";
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte';
</script>

<Navbar />

<svelte:head>
	<title>Customers</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>

<!-- Customer table -->
<div>
	<Sidebar/>
	<h1 class="text-center text-5xl pt-10 pb-5">Customers</h1>
	<h4 class="text-center text-md">Entire list of customers</h4>
	<section class="flex justify-center p-10">
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
</div>
