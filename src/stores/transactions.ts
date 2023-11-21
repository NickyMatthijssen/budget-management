import type { Transaction } from '$lib/models';
import { writable } from 'svelte/store';

const items = writable<Transaction[]>([]);

export const transactions = {
	items,
	set: (transactions: Transaction[]) => items.set(transactions),
	add: (transaction: Transaction) => {
		items.update((transactions: Transaction[]): Transaction[] => {
			let tempTransactions = [...transactions];
			tempTransactions.push(transaction);

			return tempTransactions;
		});
	},
	remove: (index: number) => {
		items.update((transactions: Transaction[]): Transaction[] => {
			let tempTransactions = [...transactions];
			tempTransactions.splice(index, 1);

			return tempTransactions;
		});
	},
	update: (index: number, transaction: Transaction) => {
		items.update((transactions: Transaction[]): Transaction[] => {
			transactions.splice(index, 1, transaction);

			return transactions;
		});
	}
};
