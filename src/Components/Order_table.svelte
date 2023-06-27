<script>
    import { page } from '$app/stores';
    import order_data from '../routes/orders/order_data';
    import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell} from 'flowbite-svelte';
    import OrderId from '../routes/orders/[id]/order_id.svelte';
    let orders = [];

    // Function that generates a random order
    const generate_order = () => {
        let new_order = order_data();
        orders.push(new_order);
    }

    // Generates 10 random orders
    for (let i = 0; i < 10; i += 1) {
        generate_order()
    }

    // Get the path of the current url
    let url = $page.url.pathname;
    let isOrderID = false
    let values_for_orders = []

    // URL is /orders/[id]
    if (url.length > 7) {

        let orderID = url.split("/")[2]
        isOrderID = true
        orders.forEach((order) => {
            if (orderID == order.id) {
                values_for_orders.push(order)
            }
        }) 
    }
    
</script>

<section class="flex justify-center my-5">
    {#if isOrderID}
        <OrderId order={values_for_orders}/>
    {/if}
        
    {#if isOrderID == false}
        <Table striped={true} hoverable={true} class="border-2">
        <TableHead class="border-2">
            <TableHeadCell>Customer ID</TableHeadCell>
            <TableHeadCell>Total</TableHeadCell>
        </TableHead>

        {#each orders as order}
            <TableBody>
                <TableBodyRow>
                <TableBodyCell><a href="/orders/{order.id}">{order.id}</a></TableBodyCell>
                <TableBodyCell>{order.total}</TableBodyCell>
                <TableBodyCell>
                </TableBodyCell>
                </TableBodyRow>
            </TableBody>
        {/each}
    </Table>
    {/if}
</section>