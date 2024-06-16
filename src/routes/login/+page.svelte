<script lang="ts">
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
</script>

<div class="w-1/3 mx-auto">
	<h1>Login Page</h1>
	<Card>
		<form class="flex flex-col space-y-6" action="/login" method="post">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
			<Label class="space-y-2">
				<span>Email</span>
				<Input type="email" name="email" placeholder="name@company.com" required />
			</Label>
			<Label class="space-y-2">
				<span>Your password</span>
				<Input type="password" name="password" placeholder="•••••" required />
			</Label>
			<div class="flex items-start">
				<Checkbox>Remember me</Checkbox>
				<a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500">
					Lost password?
				</a>
			</div>
			<Button type="submit" class="w-full">Login to your account</Button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">
					Create account
				</a>
			</div>
		</form>
	</Card>
</div>
