<script>
    export let order;
    let isInvalid = false;

    if (order.length == 0) {
        isInvalid = true;
    }

    import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, Button} from 'flowbite-svelte';
</script>

{#if isInvalid}
    <h2>Order does not exist in the database. Please try a different order</h2>
{/if}

{#if isInvalid == false}
    
    <Table striped={true} hoverable={true} class="border-2">
        <TableHead class="border-2">
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Customer ID</TableHeadCell>
            <TableHeadCell>Total</TableHeadCell>
            <TableHeadCell>Items</TableHeadCell>
        </TableHead>
        <TableBody>
            <TableBodyRow>
            <TableBodyCell>{order[0].id}</TableBodyCell>
            <TableBodyCell>{order[0].customerID}</TableBodyCell>
            <TableBodyCell>{order[0].total}</TableBodyCell>
            <TableBodyCell>{order[0].items}</TableBodyCell>
            </TableBodyRow>
        </TableBody>
    </Table>
    <Button class="shadow text-center absolute m-5 top-80" color="blue" href="/customers/{order[0].customereID}">View Customer</Button>
{/if}