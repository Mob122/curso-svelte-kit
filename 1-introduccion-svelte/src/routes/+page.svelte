<script lang='ts'>
	// import tippy from "tippy.js";
    // import "tippy.js/dist/tippy.css";

    // import longpress from "$lib/actions/longpress.svelte";

    
    // let mostrarBoton = $state(true);
    // let duracion = $state(3000);


    // let button: HTMLButtonElement;

    // $effect(() => {
    //     const tooltop = tippy(button, {
    //         content: "Hello Tippy"                        
    //     })        
    
    //     return () => {
        //         tooltop.destroy();
        //     }
        // })


    import tippy, { tippy2 } from "$lib/actions/tippy.svelte";

    let content = $state("Hello Tippy from Svelte Action!");

    
</script>

<!-- <label for="checkbox">
    <input type="checkbox" bind:checked={mostrarBoton}>
    Mostrar botón
</label>
<label for="range">
    <input type="range" name="range" id="range" bind:value={duracion} max="4000" step="100">
    {duracion} ms
</label> -->

<!-- {#if mostrarBoton} -->
    <!-- Lo que hace el "use:" es aplicar una acción a un elemento -->
    <!-- <button 
    use:longpress={() => ({duracion}) } 
    onlongpress={() => console.log('Has hecho longpress!')}
    >Text</button>    
{/if} -->

<!--Tippy.js -->

<input type="text" name="tippy" id="tippy" bind:value={content}>

<button use:tippy={() => ({
    content: content,
    animation: "scale"
})}>Button</button>

<button {@attach tippy2({content})}>Button 2</button>


<style>
    :global {
        body {
            background-color: #222;
            color: #fff;
        }
    }
</style>