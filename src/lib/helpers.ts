import type { Transaction } from './models';
import type { TransactionType } from './types';

export function filterTransactionsByType(
	transactions: Transaction[],
	type: TransactionType
): Transaction[] {
	return transactions.filter((transaction) => transaction.type === type);
}

export function sumTransactionsByType(transactions: Transaction[], type: TransactionType): number {
	let sum = filterTransactionsByType(transactions, type).reduce(
		(value, transaction) => value + Number(transaction.amount ?? 0),
		0
	);

	return isNaN(sum) ? 0 : sum;
}

export const formatCurrency = (value: number) =>
	new Intl.NumberFormat('nl', { style: 'currency', currency: 'EUR' }).format(value);
