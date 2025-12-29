<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if page.url.pathname.startsWith('/about')}
	{@render children()}
{:else}
	<div class="bg-pink-900 border-2 p-4">
		<h1 class="text-3xl">Root Layout</h1>
		<nav class="my-2 bg-amber-600 p-2">
			<ul class="flex gap-2">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
			</ul>
		</nav>
		{@render children()}
	</div>
{/if}

