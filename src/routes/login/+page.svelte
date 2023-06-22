<script>
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Revolution Cycle dashboard" />
</svelte:head>

<section>
	<div class="flex justify-center py-20">
		<Card >
			<form class="flex flex-col space-y-6" action="/">
				<h3 class="text-xl font-medium text-gray-900 dark:text-white">Login</h3>
				<Label class="space-y-2">
					<span>Email</span>
					<Input type="email" name="email" placeholder="name@company.com" required />
				</Label>
				<Label class="space-y-2">
					<span>Password</span>
					<Input type="password" name="password" placeholder="•••••" required />
				</Label>
				<div class="flex items-start">
					<Checkbox>Remember me</Checkbox>
				</div>
				<a href="/" class="text-sm text-primary-700 hover:underline dark:text-primary-500">Lost password?</a>
				<Button type="submit" class="w-full">Login to your account</Button>
					<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
						Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
					</div>
			</form>
		</Card>
	</div>
</section>
