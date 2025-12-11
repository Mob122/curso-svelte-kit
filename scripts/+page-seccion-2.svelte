<!-- <script>
	import MostrarNombre from "$lib/components/MostrarNombre.svelte";
	
</script>

<h1>¡Fuera del componente!</h1>
<MostrarNombre /> -->

<!-- <script>
	import NumeroRandom from "$lib/components/NumeroRandom.svelte";
	
	</script>
	
	<h1>¡Fuera del componente!</h1>
	<NumeroRandom /> -->

<!-- <script>
	import Contador from "$lib/components/Contador.svelte";
	
	</script>
	
	<Contador /> -->

<script lang="ts">
	import Boton from "$lib/components/Boton.svelte";
	import { AlarmClock, Search, SearchX } from "@lucide/svelte";

	let html = '<p>Hola desde un servidor</p>';

	let boton: Boton;

	$effect(() => {
		boton.focus(); // Llama al método focus del componente Boton después de cada renderizado.
		console.log(boton.getButton()); // Llama al método getButton del componente Boton después de cada renderizado.
		
	});
</script>

<div class="wrapper">
	{@html html}
	<!-- Devemos aregar un role de presentation para que el evento onclick del div no interfiera con el del boton -->
	 <!-- El rol presentation indica que el elemento es solo para presentación y no debe ser anunciado por lectores de pantalla -->
	<div role="presentation" onclick={() => { 
		console.log("event coming from div");
		
	}}>
		<Boton 
			bind:this={boton} 
			href={undefined}
			shadow={true} 
			--buttonBgColor="#10b981" 
			--buttonTextColor="#ffffff" 
			onclick={(e) => { // Onclickcapture.
			e.stopPropagation();
			console.log("event coming from Boton");
		}
} onlefthover={() => {
			console.log('Left hovered');
			
		}}>
			{#snippet izquierda(esHovered: boolean)}
				{#if esHovered}
					<Search />
				{:else}
					<SearchX />
				{/if}
			{/snippet}
			<!-- {#snippet children(esHovered: boolean)} -->
				<!-- Texto {esHovered} -->
				 Texto
			<!-- {/snippet} -->
			{#snippet derecha()}
				<AlarmClock />
			{/snippet}
		</Boton>
	</div>
</div>

<style>
	/* :global(body) {
		background-color: black;
	} */
	:global {
		body {
			background-color: black;
		}
	}	

	.wrapper :global {
		p {
			color: white;
		}

		/* button {
			background-color: blue !important;
		} */
	}

	/* @keyframes --global-move {

	} */
</style>