<script lang='ts'>
	import { browser } from '$app/environment';
	import { on } from 'svelte/events';
	import { createSubscriber } from 'svelte/reactivity';
	import { scrollY } from 'svelte/reactivity/window';
    
    // import ContadorClick from "$lib/components/ContadorClick.svelte";
	// import ContadorClickDoble from "$lib/components/ContadorClickDoble.svelte";

    // let scrollY = $state(browser ? window.scrollY : 0);

    // Agregar un efecto para actualizar el scrollY cuando se haga scroll.
    // $effect(() => {
    //     // Agregar un event listener para el scroll.
    //     window.addEventListener('scroll', e => {
    //         scrollY = window.scrollY;
    //     })
    //     // Limpiar el event listener cuando el componente se destruya.
    //     return () => {
    //         window.removeEventListener('scroll', e => {
    //             scrollY = window.scrollY;
    //         })
    //     }
    // })

    // const sub = createSubscriber((update) => {
    //     console.log('init');
    //     const off = on(window, 'scroll', update);
    //     return () => {
    //         console.log('cleanup');
    //         off();
    //     }
    // })
</script>

<!-- <div class="space-y-2">
    <ContadorClick />
    <ContadorClick />
    <ContadorClick />
    
    <ContadorClickDoble />
</div> -->

<h1 class="fixed">
    <!-- {sub()}{browser ? window.scrollY : 0} -->
     {scrollY.current}
</h1>
<div class="h-[2000px]">

</div>

<style>
    :global {
        body {
            background-color: #222;
            color: #fff;
        }
    }
</style>