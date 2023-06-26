<script>
    import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell} from 'flowbite-svelte';
    export let customer
    let invalid = false;
    if (customer.length == 0) {
        invalid = true
    }
    
</script>


{#if invalid}
    <h2>Customer does not exist in the database. Please try another customer.</h2>
{/if}

{#if invalid == false}
<Table class="border-2">
    <TableHead class="border-2">
        <TableHeadCell>Customer ID</TableHeadCell>
        <TableHeadCell>First name</TableHeadCell>
        <TableHeadCell>Last name</TableHeadCell>
        <TableHeadCell>Phone</TableHeadCell>
        <TableHeadCell>Email</TableHeadCell>
        <TableHeadCell>Address</TableHeadCell>
    </TableHead>
    
    <TableBody>
        <TableBodyRow>
            <TableBodyCell>{customer[0].id}</TableBodyCell>
            <TableBodyCell>{customer[0].firstName}</TableBodyCell>
            <TableBodyCell>{customer[0].lastName}</TableBodyCell>
            <TableBodyCell>{customer[0].phone}</TableBodyCell>
            <TableBodyCell>{customer[0].email}</TableBodyCell>
            <TableBodyCell>{customer[0].phone}</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell></TableBodyCell>
            <TableBodyCell></TableBodyCell>
            <TableBodyCell></TableBodyCell>
            <TableBodyCell></TableBodyCell>
            <TableBodyCell></TableBodyCell>
            <TableBodyCell></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>City</TableBodyCell>
            <TableBodyCell>Province</TableBodyCell>
            <TableBodyCell>Country</TableBodyCell>
            <TableBodyCell>Postal</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>{customer[0].city}</TableBodyCell>
            <TableBodyCell>{customer[0].province}</TableBodyCell>
            <TableBodyCell>{customer[0].country}</TableBodyCell>
            <TableBodyCell>{customer[0].postal}</TableBodyCell>
            <TableBodyCell></TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Orders</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell><a href="/orders/{customer[0].orders[0]}">{customer[0].orders[0]}</a></TableBodyCell>
        </TableBodyRow>
    </TableBody>
</Table>
{/if}