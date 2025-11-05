<script lang="ts">
	import { onDestroy, onMount, tick, untrack } from "svelte";

    let numeroRandom: number = $state(Math.floor(Math.random() * 10));
    let doubleNumeroRandom: number = $derived(numeroRandom * 2);

    let historia: number[] = $state([untrack(() => numeroRandom)]); // La razón de usar untrack es para que la variable historia sea independiente de numeroRandom al inicializarse.

    let historiaPEtiqueta: HTMLParagraphElement;

    onMount(() => { // Sirve para ejecutar código cuando el componente se monta en el DOM y solo se ejecuta una vez.
        console.log('Componente montado');

        return () => {
            console.log('Componente desmontado');
        }
    });

    onDestroy(() => { // Sirve para ejecutar código cuando el componente se desmonta del DOM y solo se ejecuta una vez.
        console.log('onDestroy: Componente desmontado');        
    });

    // 1. Cuando NO usar $effect
    // let doubleNumeroRandom = $state();
    // // $effect(() => {
    // //     doubleNumeroRandom = numeroRandom * 2;
    // // })

    // 2. Cuando NO usar $effect
    // $effect(() => {
    //     // Actualizar la historia solo cuando numeroRandom cambie.
    //     //  untrack evita que este efecto se vuelva a disparar
    //     //  cuando historia cambie.
    //     numeroRandom;
    //     untrack(() => {
    //         historia.push(numeroRandom);
    //     });
    // })

    $effect.pre(() => {
        historia.length;
        console.log('$effect.pre', historiaPEtiqueta?.innerText);
        tick().then(() => {
            console.log('$effect.pre - tick', historiaPEtiqueta.innerText);
        });
        return () => {
            console.log('$effect.pre - cleanup', historiaPEtiqueta.innerText); // La función de limpieza se ejecuta antes de la próxima ejecución del efecto y sirve para liberar recursos.
        }
    })

    $effect(() => {
        historia.length;
        console.log('$effect', historiaPEtiqueta.innerText);
        return () => {
            console.log('$effect - cleanup', historiaPEtiqueta.innerText); // La función de limpieza se ejecuta antes de la próxima ejecución del efecto y sirve para liberar recursos.
        }
    })
</script>

<h2>Número Random: {numeroRandom}</h2>
<h2>Doble del Número Random: {doubleNumeroRandom}</h2>
<p bind:this={historiaPEtiqueta}>Historia de Números: {historia.join(", ")}</p>

<button onclick={
    () => {
        numeroRandom = Math.floor(Math.random() * 10);
        historia.push(numeroRandom);
        console.log({ numeroRandom, doubleNumeroRandom });  
    }
}>
    Generar Número Random
</button>