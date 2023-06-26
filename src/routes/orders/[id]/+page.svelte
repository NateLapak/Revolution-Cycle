<script>
    import Navbar from "../../../Components/Navbar.svelte"
    import Sidebar from "../../../Components/Sidebar.svelte"
    import OrderTable from "../order_table.svelte";
</script>

<svelte:head>
	<title>Order id</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>


<Navbar></Navbar>
<Sidebar></Sidebar>

<div class="my-3">
    <h2 class="text-center text-5xl my-12">Order id</h2>
	<OrderTable />
</div>