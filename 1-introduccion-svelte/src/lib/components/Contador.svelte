<script lang="ts">
	import { fly, scale } from "svelte/transition";

    let contador = $state(0);
    let frecuencia = $state(1000);
    let pausado = $state(false);

    $effect(() => {
        // console.log('contador fuera del intervalo:', contador); // Cuidado con este console.log, porque se ejecuta cada vez que cambia el contador, no solo al crear el intervalo porque el efecto depende de contador.

        let intervalo: ReturnType<typeof setInterval>;

        if (!pausado) {
            intervalo = setInterval(() => {
                contador += 1;
            }, frecuencia);
        }

        return () => clearInterval(intervalo); // Limpieza del intervalo al cambiar la frecuencia porque se vuelve a ejecutar el efecto y se crea un nuevo intervalo, sino habría múltiples intervalos corriendo simultáneamente.
    })
</script>

{#key contador}	
	<h1 class="inline-block" in:fly={{y: -20}}>{contador}</h1>
{/key}

<br />

{frecuencia}

<button onclick={() => { 
    contador = 0; 
    const _originalFrequencia = frecuencia;
    frecuencia = 0;
    frecuencia = _originalFrequencia;
}}>Reiniciar</button>
<button onclick={() => { pausado = !pausado; }}>{pausado ? 'Reanudar' : 'Pausar'}</button>

<button onclick={() => {
    frecuencia *= 2;
}}>Lento</button>
<button onclick={() => {
    frecuencia /= 2;
}}>Rápido</button>

<!-- <script lang="ts">
	import { onMount } from 'svelte';

	let count = $state(0);
	let frequency = $state(1000);
	let paused = $state(true);
	let interval: ReturnType<typeof setInterval>;

	function createInterval() {
		clearInterval(interval); // Clear any old interval if any
		// Create a new interval if paused is not clicked
		if (!paused) {
			interval = setInterval(() => {
                console.log("Interval tick");
                
				count += 1;
			}, frequency);
		}
	}

	function togglePlayState() {
		if (!paused) {
			paused = true;
			clearInterval(interval);
		} else {
			paused = false;
			createInterval();
		}
	}
	function reset() {
		count = 0;
		createInterval();
	}
	function updateFrequency(_frequency: number) {
		frequency = _frequency;
		createInterval();
	}

	onMount(() => {
        console.log("Componente montado");
        
		createInterval();
		return () => {
			console.log("Componente desmontado");
			clearInterval(interval);
		};
	});
</script>

<h1>{count}</h1>
{frequency}
<button onclick={reset}>Reset</button>
<button onclick={togglePlayState}>{paused ? 'Play' : 'Pause'}</button>

<button
	onclick={() => {
		updateFrequency(frequency * 2);
	}}>Slower</button
>
<button
	onclick={() => {
		updateFrequency(frequency / 2);
	}}>Faster</button
> -->