import { databases, id } from '$lib/appwrite';
import type { Model } from '$lib/models';
import type { Models } from '../../../node_modules/appwrite/types/models';

export abstract class DocumentService<T extends Model> {
	/** The database id */
	database: string;
	/** The collection id */
	collection: string;

	constructor(database: string, collection: string) {
		this.database = database;
		this.collection = collection;
	}

	/**
	 * Return the collection list of documents.
	 *
	 * @returns
	 */
	async list(): Promise<T[]> {
		const results = (await databases.listDocuments(
			this.database,
			this.collection
		)) as Models.DocumentList<Models.Document>;

		return results.documents.map((document) => this.fromDocument(document));
	}

	/**
	 * Create the document to the database.
	 *
	 * @param data
	 * @returns
	 */
	async create(data: T): Promise<T> {
		const document = await databases.createDocument(
			this.database,
			this.collection,
			id.unique(),
			data
		);

		return this.fromDocument(document);
	}

	/**
	 * Update the document.
	 *
	 * @param model
	 * @returns
	 */
	async update(model: T): Promise<T> {
		const document = await databases.updateDocument(
			this.database,
			this.collection,
			model.id,
			this.toDocument(model)
		);

		return this.fromDocument(document);
	}

	/**
	 * Delete the document from the database.
	 *
	 * @param model
	 */
	async delete(model: T): Promise<void> {
		await databases.deleteDocument(this.database, this.collection, model.id);
	}

	/**
	 * Transform the external document to a internal model.
	 *
	 * @param document
	 */
	abstract fromDocument(document: Models.Document): T;

	/**
	 * Transform the model to only have the correct document values.
	 *
	 * @param model
	 */
	abstract toDocument(model: T): object;
}
