<script lang="ts">
	import { goto } from "$app/navigation";
	import { account } from "$lib";
	import { redirect } from "@sveltejs/kit";


    async function handle() {
        const currentSession = await account.getSession('current');

        await account.deleteSession(currentSession.$id);

        goto('/auth');
    }
</script>

<button on:click={handle} class="button px-4">
    Sign out
</button>