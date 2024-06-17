<script lang="ts">
	import { Card, Button, Label, Input, Alert } from 'flowbite-svelte';

	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';

	export let data;
	const { form, constraints, message, enhance, errors } = superForm(data.form);
</script>

<div class="container mx-auto px-6 py-5 lg:w-1/3 lg:py-32">
	<Card>
		<form class="flex flex-col space-y-6" action="/login" method="post" use:enhance>
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to platform</h3>
			{#if $message}
				{#if $message.type}
					<Alert color="red">{$message.message}</Alert>
				{:else}
					<Alert color="blue">{$message}</Alert>
				{/if}
			{/if}
			<Label class="space-y-2">
				<span>Email</span>
				<Input
					type="email"
					name="email"
					placeholder="name@company.com"
					bind:value={$form.email}
					{...$constraints.email}
				/>
			</Label>
			<Label class="space-y-2">
				<span>Your password</span>
				<Input
					type="password"
					name="password"
					placeholder="•••••"
					bind:value={$form.password}
					{...$constraints.password}
				/>
			</Label>
			<Button type="submit" class="w-full">Login to your account</Button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Not registered? <a
					href="/register"
					class="text-primary-700 hover:underline dark:text-primary-500"
				>
					Create account
				</a>
			</div>
		</form>
	</Card>
</div>
