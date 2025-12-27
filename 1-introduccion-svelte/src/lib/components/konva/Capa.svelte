<script lang="ts">
	import Konva from "konva";
	import { onDestroy, type Snippet } from "svelte";
	import { getEscenarioContext, setCapaContext } from "./konva-context";
    import { registrarEventos, type KonvaEventHooks } from "./events";

    let {children, ...props }: {
        children ?: Snippet
    } & Konva.LayerConfig & KonvaEventHooks = $props();

    const escenario = getEscenarioContext();
    export const nodo = new Konva.Layer(props);

    // Crear el contexto de la capa para que los hijos puedan acceder a él.
    setCapaContext(nodo);

    registrarEventos(props, nodo);

    escenario.add(nodo);

    Object.keys(props).filter(prop => !prop.startsWith('on')).forEach(prop => {
        $effect(() => {
            nodo.setAttr(prop, props[prop as keyof Konva.StageConfig]);
        })
    })

    onDestroy(() => {
        nodo.destroy();
    })
</script>

{@render children?.()}