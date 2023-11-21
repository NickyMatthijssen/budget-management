import { api } from '$lib/api';
import { redirect } from '@sveltejs/kit';
import { auth } from '../../stores/auth';

export async function load() {
	try {
		await auth.initialize();
	} catch (_) {
		throw redirect(302, '/auth');
	}

	const transactions = await api.transactions.list();

	return {
		transactions
	};
}
