<script>
    import { page } from '$app/stores';
    import order_data from "./order_data"
    import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell} from 'flowbite-svelte';
    import OrderId from './[id]/order_id.svelte';
    let orders = [];

    // Generates 8 random orders
    for (let i = 0; i < 10; i += 1) {
        let new_order = order_data();
        orders.push(new_order);
    }

    let url = $page.url.pathname;
    let isOrderID = false

    let values_for_orders = []

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