<script lang="ts">
    import { Button } from 'flowbite-svelte';
</script>


<svelte:head>
    <title>RemotedLess - Track your own work</title>
    <meta name="description" content="RemotedLess - Track your own works/tasks">
</svelte:head>

<div class="container mx-auto">

    <h1 class="text-6xl font-extrabold">Welcome to RemotedLess</h1>
    <h2 class="text-4xl font-bold">Track your own works</h2>
    <p class="text-xl">Monitor pekerjaan dan status anda. Trello-like apps.</p>
    <Button color="blue" pill href="/login">Login</Button>
    <Button outline pill href="/register">Register</Button>
</div>
