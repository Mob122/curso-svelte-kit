<script lang='ts'>
    import longpress from "$lib/actions/longpress.svelte";

    let mostrarBoton = $state(true);
    let duracion = $state(3000);
</script>

<label for="checkbox">
    <input type="checkbox" bind:checked={mostrarBoton}>
    Mostrar botón
</label>
<label for="range">
    <input type="range" name="range" id="range" bind:value={duracion} max="4000" step="100">
    {duracion} ms
</label>

{#if mostrarBoton}
    <!-- Lo que hace el "use:" es aplicar una acción a un elemento -->
    <button 
    use:longpress={() => ({duracion}) } 
    onlongpress={() => console.log('Has hecho longpress!')}
    >Text</button>    
{/if}


<style>
    :global {
        body {
            background-color: #222;
            color: #fff;
        }
    }
</style>