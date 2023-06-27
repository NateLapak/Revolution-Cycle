<script>
	import Navbar from "../../Components/Navbar.svelte"
	import Sidebar from "../../Components/Sidebar.svelte"
	import CustomerTable from "../../Components/Customer_table.svelte";
</script>


<svelte:head>
	<title>Customers</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>

<Navbar />
<Sidebar/>

<!-- Customer table -->
<div class="my-3">
	<h1 class="text-center text-5xl mt-10">Customers</h1>
	<h4 class="text-center text-lg my-5">Entire list of customers</h4>
	<CustomerTable/>
</div>