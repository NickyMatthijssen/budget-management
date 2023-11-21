import { env } from '$env/dynamic/public';
import { TransactionService } from './services/transaction.service';

export const collections = {
	transactions: import.meta.env.APPWRITE_TRANSACTIONS_COLLECTION
};

export const api = {
	transactions: new TransactionService(
		env.PUBLIC_APPWRITE_DATABASE_ID,
		env.PUBLIC_APPWRITE_TRANSACTIONS_ID
	)
};
