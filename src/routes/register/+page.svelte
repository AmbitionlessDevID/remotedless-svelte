<script lang="ts">
	import { Card, Button, Label, Input, Alert, Helper } from 'flowbite-svelte';
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';

	export let data;
	const { form, constraints, message, enhance, errors } = superForm(data.form);
</script>

<div class="container mx-auto px-6 py-5 lg:w-1/3 lg:py-32">
	<Card class="mx-auto">
		<form class="flex flex-col space-y-6" method="post" use:enhance>
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h3>
			{#if $message}
				<Alert color="blue">{$message}</Alert>
			{/if}
			<Label class="space-y-2">
				<span>Full name</span>
				<Input
					type="text"
					name="name"
					placeholder="John Doe"
					bind:value={$form.name}
					{...$constraints.name}
				/>
				{#if $errors.name}
					<Helper class="mt-2" color="red">
						<span class="font-medium">Validation error: </span>
						{$errors.name}
					</Helper>
				{/if}
			</Label>
			<Label class="space-y-2">
				<span>Email</span>
				<Input
					type="email"
					name="email"
					placeholder="name@company.com"
					bind:value={$form.email}
					{...$constraints.email}
				/>
				{#if $errors.email}
					<Helper class="mt-2" color="red">
						<span class="font-medium">Validation error: </span>
						{$errors.email}
					</Helper>
				{/if}
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
				{#if $errors.password}
					<Helper class="mt-2" color="red">
						<span class="font-medium">Validation error: </span>
						{$errors.password}
					</Helper>
				{/if}
			</Label>
			<Button type="submit" class="w-full">Sign Up</Button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Already Registered? <a
					href="/login"
					class="text-primary-700 hover:underline dark:text-primary-500"
				>
					Login
				</a>
			</div>
		</form>
	</Card>
</div>
