<script>
	import Navbar from "../../Components/Navbar.svelte"
	import Sidebar from "../../Components/Sidebar.svelte"
	import OrderTable from "../../Components/Order_table.svelte";
</script>


<svelte:head>
	<title>Orders</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>

<Navbar />
<Sidebar />

<!-- Order table -->
<div class="my-3">
	<h1 class="text-center text-5xl mt-10">Orders</h1>
	<h4 class="text-center text-lg my-5">Entire list of orders</h4>
	<OrderTable />
</div>