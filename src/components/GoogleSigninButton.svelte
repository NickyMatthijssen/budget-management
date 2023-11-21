<script>
	import { account } from '$lib/appwrite';

	function login() {
		account.createOAuth2Session('google', 'http://localhost:5173');
	}
</script>

<div class="mx-auto w-full max-w-[386px]">
    <button on:click={login} class="button w-full justify-center">
        <img src="/google.png" width={16} height={16} />
        <span>Sign in with google</span>
    </button>
</div>