<script lang="ts">
    import '@bprogress/core/css';
	import { BProgress } from '@bprogress/core';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';


	BProgress.configure({
		showSpinner: false,
		trickleSpeed: 200,
		minimum: 0.1
	});

	let cargandoTimeout: NodeJS.Timeout;

	beforeNavigate(() => {
		cargandoTimeout = setTimeout(() => {
			BProgress.start();
		}, 500);
	})
	

	afterNavigate((navigacion) => {
		clearTimeout(cargandoTimeout);
		BProgress.done();
	})

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{page.data.title ? `${page.data.title} | NotaAhora` : 'NotaAhora'}</title>
	<meta property="og:title" content={page.data.title ? `${page.data.title} | NotaAhora` : 'NotaAhora'} />

	{#if page.data.description}
		<meta property="og:description" content={page.data.description} />
		<meta name="description" content={page.data.description} />
		
	{/if}	
</svelte:head>



<div class="mx-auto w-[90%] max-w-7xl mt-4 overflow-hidden">
	{@render children()}
</div>

