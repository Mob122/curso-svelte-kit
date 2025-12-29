<script lang='ts'>
	import Contador from "$lib/components/Contador.svelte";
	import fadejs from "$lib/transitions/fadejs";
	import spin from "$lib/transitions/spin";
	import { cubicInOut } from "svelte/easing";
	import { blur, fade, fly } from "svelte/transition";


    let mostrarDiv = $state(false);
</script>
<!-- <input type="checkbox" bind:checked={mostrarDiv}>

{#if mostrarDiv} -->
    <!-- <div class="container bg-black/70 rounded-md text-cyan-500" transition:fade={{duration: 2000, easing: cubicInOut}}> -->
    <!-- <div class="container bg-black/70 rounded-md text-cyan-500" transition:fly={{duration: 2000, easing: cubicInOut, y: 100}}> -->
     <!-- <div class="container bg-black/70 rounded-md text-cyan-500" 
     in:fly={{duration: 2000, easing: cubicInOut, y: 100}} 
     out:blur={{ duration: 2000, amount: 10}}
     onintrostart={() => (console.log('introstart'))}
     onintroend={() => (console.log('introend'))}
     onoutrostart={() => (console.log('outrostart'))}
     onoutroend={() => (console.log('outroend'))}
     >
        <h1 class="font-bold text-2xl">Hola Mi nombre es Martin Reyes</h1>
        <p class="text-xl">Soy una persona que es heroe por diversión</p>
        <p class="text-md">
            Del barrio
            <span class="text-green-600">Voy hacer millonario</span>
            2026 
        </p>
        
    </div>
{/if} -->

<!-- <Contador /> -->


<input type="checkbox" bind:checked={mostrarDiv}>

{#if mostrarDiv}
    <div class="container bg-black/70 rounded-md text-cyan-500" 
        transition:fadejs={{ duration: 400 }}
        onintrostart={() => (console.log('introstart'))}
        onintroend={() => (console.log('introend'))}
        onoutrostart={() => (console.log('outrostart'))}
        onoutroend={() => (console.log('outroend'))}
        >
        <h1 class="font-bold text-2xl">Hola Mi nombre es Martin Reyes</h1>
        <p class="text-xl">Soy una persona que es heroe por diversión</p>
        <p class="text-md">
            Del barrio
            <span class="text-green-600">Voy hacer millonario</span>
            2026 
        </p>
        
</div>
{/if}


<style>
    :global {
        body {
            background-color: #222;
            color: #fff;
        }
    }
</style>