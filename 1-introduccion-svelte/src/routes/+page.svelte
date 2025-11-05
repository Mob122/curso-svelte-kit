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

<script>
	import Boton from "$lib/components/Boton.svelte";
	import { AlarmClock, Search } from "@lucide/svelte";

</script>


<Boton>
	{#snippet izquierda()}
		<Search />
	{/snippet}
	Texto
	{#snippet derecha()}
		<AlarmClock />
	{/snippet}
</Boton>