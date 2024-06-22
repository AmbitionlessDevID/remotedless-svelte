<script lang="ts">
	import { Card } from 'flowbite-svelte';

	export let data;
</script>

<h1 class="mb-4 text-4xl font-semibold">Project List</h1>

<div class="gap grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each data.projects as project}
		<Card class="max-w-full">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{project.name}
			</h5>
			{project.createdAt}
		</Card>
	{/each}
	<Card class="max-w-full text-center">Buat Project Baru</Card>
</div>
