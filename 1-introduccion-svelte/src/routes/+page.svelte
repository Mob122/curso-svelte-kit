<script lang='ts'>
	import BuggyComponent from "$lib/components/BuggyComponent.svelte";
    import { scrollY } from "svelte/reactivity/window";
	import VideoPlayer, {getAllVideo, pauseAll, playAll} from "$lib/components/VideoPlayer.svelte";

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


    // import tippy, { tippy2 } from "$lib/actions/tippy.svelte";

    // let content = $state("Hello Tippy from Svelte Action!");



    // let scrollY = $state(0);
    // let visibilityState = $state(null);




    // let textAreaWidth = $state();
    // let textAreaHeight = $state();



    // let imageWidth = $state();
    // let imageHeight = $state();

    let showVideo = $state(true);
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

<!-- <input type="text" name="tippy" id="tippy" bind:value={content}>

<button use:tippy={() => ({
    content: content,
    animation: "scale"
})}>Button</button>

<button {@attach tippy2({content})}>Button 2</button> -->

<!-- Elementos Especiales -->
 <!--  El elemento <svelte:window> nos permite escuchar eventos del objeto window -->
<!-- Debe de colocarse en el nivel superior del componente -->

<!-- <div class="fixed">{scrollY}</div>
<svelte:window 
bind:scrollY={scrollY}
onscroll={(e) => {
    console.log(e);
    
}} /> -->
<!-- <div class="fixed">{scrollY.current}</div> -->

<!-- El elemento <svelte:document> nos permite escuchar eventos del objeto document -->
<!-- {visibilityState}
<svelte:document bind:visibilityState={visibilityState} onvisibilitychangecapture={(e) => {
    console.log(document.visibilityState);    
}}/> -->

<!-- El elemento <svelte:body> nos permite escuchar eventos del objeto body -->
 <!-- <svelte:body  onmouseenter={() => {
    console.log('mousenter');
    
 }} /> -->

 <!-- El elemento <svelte:head> nos permite escuchar eventos del objeto head -->
<!-- <svelte:head>
    <title>Elementos Especiales en Svelte</title>
</svelte:head> -->


<!-- <svelte:boundary onerror={(e) => {
    console.log(e); // Reportar el error a un servicio externo.    
}}>
    <BuggyComponent />

    {#snippet failed(error: any, reset)}
        <p>{error?.message}</p>        
        <button onclick={reset}>Reset</button>
    {/snippet}
</svelte:boundary>

<div class="h-[1000px]"></div> -->

<!-- Vinculación de atributos de elementos -->
<!-- {textAreaWidth} x {textAreaHeight}
<textarea name="textarea" id="textarea" bind:offsetWidth={textAreaWidth} bind:offsetHeight={textAreaHeight}></textarea> -->

<!-- Vinculación de elementos multimedia -->
 <!-- {imageWidth} x {imageHeight}
 <img src="https://picsum.photos/200/300" bind:naturalWidth={imageWidth} bind:naturalHeight={imageHeight} alt=""> -->

 <!-- <VideoPlayer src="https://previews.customer.envatousercontent.com/h264-video-previews/3502107.mp4" /> -->


 <!-- Controlar multiples videos con script module -->

<input type="checkbox" bind:checked={showVideo}>
<br />

<button onclick={() => {
    console.log(getAllVideo());
    
}}>Get All Videos</button>
<button onclick={() => {
    playAll()
}}>Play Todos</button>
<button onclick={() => {
    pauseAll()
}}>Pausar Todos</button>

 <VideoPlayer src="https://previews.customer.envatousercontent.com/h264-video-previews/3502107.mp4" /> 
 <VideoPlayer src="https://previews.customer.envatousercontent.com/h264-video-previews/3502107.mp4" /> 

 {#if showVideo}
    <VideoPlayer src="https://previews.customer.envatousercontent.com/h264-video-previews/3502107.mp4" /> 
 {/if}

<style>
    :global {
        body {
            background-color: #222;
            color: #fff;
        }
    }
</style>