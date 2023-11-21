import type { TransactionType } from './types';

export interface Model {
	id?: string;
}

export interface User {
	id: string;
	email: string;
	name: string;
}

export interface Transaction extends Model {
	name: string;
	amount: number;
	type: TransactionType;
}

export interface IndexedTransaction extends Transaction {
	index: number;
}
