import type { Transaction } from '$lib/models';
import type { Models } from '../../../node_modules/appwrite/types/models';
import { DocumentService } from './document.service';

export class TransactionService extends DocumentService<Transaction> {
	fromDocument(document: Models.Document): Transaction {
		return {
			id: document.$id,
			name: document.name,
			amount: document.amount,
			type: document.type
		};
	}

	toDocument(model: Transaction): object {
		return {
			name: model.name,
			amount: model.amount,
			type: model.type
		};
	}
}
