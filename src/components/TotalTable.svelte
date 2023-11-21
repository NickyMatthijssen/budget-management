<script lang="ts">
	import { formatCurrency, sumTransactionsByType, type Transaction } from '$lib';
	import { transactions } from '../stores';

    const { items } = transactions;
    
    $: totalIncome = sumTransactionsByType($items, "income");
    $: totalIncomeFormatted = formatCurrency(totalIncome);
    $: totalExpenses = sumTransactionsByType($items, "expense");
    $: totalExpensesFormatted = formatCurrency(totalExpenses);
    $: total = formatCurrency(totalIncome - totalExpenses);
</script>

<table>
    <tbody>
        <tr>
            <th>Income</th>
            <td>{totalIncomeFormatted}</td>
        </tr>
        <tr>
            <td colspan="2">-</td>
        </tr>
        <tr>
            <th>Expenses</th>
            <td>{totalExpensesFormatted}</td>
        </tr>
        <tr class="border-t-2 border-neutral-900">
            <td colspan="2">= {total}</td>
        </tr>
    </tbody>
</table>

<style scoped>
th {
    @apply text-left;
}

td {
    @apply text-right;
}

th,td {
    @apply py-1;
}
</style>

