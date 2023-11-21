<script lang="ts">
	import type { IndexedTransaction, Transaction, TransactionType } from '$lib';
	import TransactionRow from './TransactionRow.svelte';
    import { Icon, Plus } from "svelte-hero-icons";
	import { transactions } from '../stores';

	export let type: TransactionType;

    const { items } = transactions;        

    $: typedTransactions = $items
        .map((transaction: Transaction, index: number) => ({...transaction, index}))        
        .filter(t => t.type === type) as IndexedTransaction[];

    const add = () => transactions.add({ type, name: '', amount: 0 });
</script>

<table class="group/table">
    <thead>
        <tr class="relative">
            <th colspan="3" class="pb-3 capitalize">
                {type} 
                <button on:click={add} class="button hidden group-hover/table:block absolute top-0 right-0 p-2">
                    <Icon src={Plus} size="12" />
                </button>
            </th>
        </tr>
    </thead>
    <tbody class="block max-h-[396px] overflow-scroll">
        {#each typedTransactions as single}
            <TransactionRow bind:transaction={single} />
        {/each}
    </tbody>
</table>

<style scoped>
    th {
        @apply text-left;
    }
</style>