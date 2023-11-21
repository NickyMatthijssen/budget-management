import { account } from '$lib/appwrite';
import type { User } from '$lib/models';
import { readonly, writable } from 'svelte/store';

const user = writable<User | undefined>(undefined);

export const auth = {
	user: readonly(user),
	initialize: async () => {
		const fetchedUser = await account.get();

		user.set({
			id: fetchedUser.$id,
			email: fetchedUser.email,
			name: fetchedUser.name
		});
	}
};
