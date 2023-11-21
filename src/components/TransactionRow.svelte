<script lang="ts">
	import { api, type IndexedTransaction } from "$lib";
    import { Icon, Trash } from "svelte-hero-icons";
	import { transactions } from "../stores";


    export let transaction: IndexedTransaction;

    type Fields = "name" | "value";

    let timer: NodeJS.Timeout;
    let saving: boolean = false;

    const handleChange = (target: string) => (event: Event) => {
        const targetElement = event.target as HTMLInputElement;
        clearTimeout(timer);

        timer = setTimeout(async () => {
            // @ts-ignore
            transaction[target as keyof Fields] = targetElement.value;

            if (!transaction.name || isNaN(transaction.amount)) {
                return;
            }

            saving = true;

            if (!transaction.id) {
                transactions.update(
                    transaction.index, 
                    await api.transactions.create({ name: transaction.name, amount: transaction.amount, type: transaction.type}));
            } else {
                transactions.update(
                    transaction.index, 
                    await api.transactions.update(transaction));
            }

            saving = false;
        }, 750);
    }
    
    async function remove() {
        if (!confirm("Sure?")) {
            return;
        }

        if (!!transaction.id) {
            await api.transactions.delete(transaction);
        }

        transactions.remove(transaction.index);
    }
</script>

<tr class="group/row relative">
    <td>
        <input class="form-control" value={transaction.name} on:input={handleChange('name')} />
    </td>
    <td>
        <input type="number" class="form-control" value={transaction.amount} on:input={handleChange('amount')} />
    </td>
    <td class="hidden group-hover/row:block absolute -top-2 -right-2">
        <button on:click={remove} class="button p-2 border border-neutral-700" title="Remove transaction" disabled={saving}>
            <Icon src="{Trash}" size="14" />
        </button>
    </td>
</tr>

 <style scoped>
td {
    @apply py-2;
}
 </style>