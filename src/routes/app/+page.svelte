<script lang="ts">
	import type { IndexedTransaction, Transaction } from "$lib";
	import { get } from "svelte/store";
	import SignOutButton from "../../components/SignOutButton.svelte";
	import TotalTable from "../../components/TotalTable.svelte";
    import TransactionTable from "../../components/TransactionTable.svelte";
	import { auth, transactions } from "../../stores";
	import type { PageData } from "./$types";

    export let data: PageData;
    
    transactions.set(data.transactions);

    const { name } = get(auth.user)!;
</script>

<div class="flex justify-between items-center mb-8">
    <p>Hello {name}</p>

    <SignOutButton />
</div>

<div class="grid md:grid-cols-2 gap-4 md:gap-2">
    <div>
        <TransactionTable type="income" />
    </div>

    <div>
        <TransactionTable type="expense" />
    </div>
</div>

<hr class="border-2 border-neutral-900 my-4" />

<TotalTable />