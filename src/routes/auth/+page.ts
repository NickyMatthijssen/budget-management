import { redirect } from '@sveltejs/kit';
import { auth } from '../../stores/auth';

export async function load() {
	let user = null;

	try {
		await auth.initialize();

		user = auth.user;
	} catch (_) {
	} finally {
		if (!!user) {
			throw redirect(302, '/app');
		}
	}
}
