<script lang='ts'>
	import { Capa, Escenario, Rect } from "$lib/components/konva";
    import { innerWidth, innerHeight } from "svelte/reactivity/window";
	// import Konva from "konva";

	// import ContadorClick from "$lib/components/ContadorClick.svelte";
	// import Contadores from "$lib/components/Contadores.svelte";
	
    // let contenedor: HTMLDivElement;

    // $effect(() => {
    //     const escenario = new Konva.Stage({
    //         container: contenedor,
    //         width: 500,
    //         height: 500
    //     })

    //     const capa = new Konva.Layer();

    //     const rect1 = new Konva.Rect({
    //         x: 20,
    //         y: 20,
    //         width: 100,
    //         height: 60,
    //         fill: 'purple',
    //         stroke: 'white',
    //         strokeWidth: 4            
    //     });

    //     capa.add(rect1);

    //     escenario.add(capa);
    // })

    let x = $state(150);
    let y = $state(90);
    let fill = $state('#A020F0');

    // Después de los : ponemos el tipo del componente para tener acceso a sus métodos y propiedades.
    let escenario: Escenario; // Referencia al componente Escenario.
    let capa: Capa; // Referencia al componente Capa.
    let rect: Rect; // Referencia al componente Rect.

</script>

<!-- 1. Compartiendo estado entre componentes con y sin contexto -->
<!-- <ContadorClick />

<div class="mt-6">

</div>

<Contadores initialContador={10}>
    <div class="space-y-2">
        <ContadorClick />
        <ContadorClick />
    </div>
</Contadores>

<div class="mt-6">

</div>

<Contadores>
    <div class="space-y-2">
        <ContadorClick />
        <ContadorClick />
    </div>
</Contadores> -->


<!-- <div bind:this={contenedor}></div> -->
<!-- <Escenario height={500} width={500}> -->
 <Escenario bind:this={escenario} height={(innerHeight.current || 0) / 1.2} width={innerWidth.current}>
    <Capa bind:this={capa} onclick={(e) => {        
        console.log('Capa clickeada', e);
    }}>
        <Rect 
        bind:this={rect}
        ondragend={(e) => {
            console.log(e);            
        }} ondblclick={() => {
            alert('Rectángulo doble clickeado');
        }} width={200} height={200} x={20} y={40} fill='purple' stroke='yellow' strokeWidth={3} draggable />

        <Rect  width={100} height={100} bind:x bind:y {fill} stroke='coral' strokeWidth={3} draggable/>
    </Capa>
</Escenario>

<button onclick={() => {
    console.log(escenario.getEscenario().getAttrs());
    console.log(capa.nodo.getAttrs());
    console.log(rect.nodo.x(0));
    
}}>Log Info</button>
{x}
<input type="range" name="x" id="x" bind:value={x} min={0} max={300} />
{y}
<input type="range" name="y" id="y" bind:value={y} min={0} max={300} />
<input type="color" name="fill" id="fill" bind:value={fill} />



<style>
    :global {
        body {
            background-color: #222;
            color: #fff;
        }
    }
</style>