<script lang="ts">
	export let data;
	import { Alert } from 'flowbite-svelte';
</script>

{#if data.auth.authenticated}
	<Alert color="green">Logged in with id ({data.auth?.user?.name})</Alert>
{:else}
	<Alert color="red">User not logged in</Alert>
{/if}
