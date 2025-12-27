<script lang="ts">
	import Konva from "konva";
	import { onDestroy, onMount, type Snippet } from "svelte";
	import { setEscenarioContext } from "./konva-context";
    import { registrarEventos, type KonvaEventHooks } from "./events";


    let contenedor: HTMLDivElement;

    let {children, ...props}: {
        children?: Snippet,
    } & Konva.StageConfig & KonvaEventHooks = $props();

    let escenario: Konva.Stage;
    let isListo = $state(false);

    setEscenarioContext(() => escenario);

    export function getEscenario() {
        return escenario;
    }

    // $effect(() => {
    onMount(() => {
        escenario = new Konva.Stage({
            container: contenedor,
            ...props
        });

        registrarEventos(props, escenario);

        isListo = true;

        // // Primera forma utilizando onMount.
        // return () => {
        //     // Limpiar recursos al desmontar el componente porque Konva no lo hace solo.
        //     escenario.destroy();
        // }
    })

    onDestroy(() => {
        // Segunda forma utilizando onDestroy.
        // Se coloca como ? por si escenario no se ha inicializado.
        escenario?.destroy();
    })

    Object.keys(props).filter(prop => !prop.startsWith('on')).forEach(prop => {
        $effect(() => {
            escenario.setAttr(prop, props[prop as keyof Konva.StageConfig]);
        })
    })

</script>

<div bind:this={contenedor}>
    {#if isListo}
        {@render children?.()}    
    {/if}
</div>