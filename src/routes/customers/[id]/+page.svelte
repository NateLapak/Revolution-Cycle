<script>
    import Navbar from "../../../Components/Navbar.svelte"
    import Sidebar from "../../../Components/Sidebar.svelte"
	import CustomerTable from "../../../Components/Customer_table.svelte";
</script>

<svelte:head>
	<title>Customer id</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>


<Navbar></Navbar>
<Sidebar></Sidebar>

<div class="my-3">
    <h2 class="text-center text-center text-5xl mt-12">Customer id</h2>
	<section class="flex justify-center my-5">
		<CustomerTable />
	</section>
</div>