<script lang="ts">
	import Konva from "konva";
	import { getCapaContext } from "./konva-context";
	import { onDestroy } from "svelte";
    import { type KonvaEventHooks, KONVA_EVENTS, registrarEventos } from "./events";

    let {x = $bindable(), y = $bindable(), staticProps = false, ...props}: {staticProps?: boolean} & Konva.RectConfig & KonvaEventHooks = $props();


    const capa = getCapaContext();
    // Colocar export nos permite acceder al nodo desde el componente padre.
    export const nodo = new Konva.Rect(props);

    // // Agregar el manejador de evento si se proporciona.
    // KONVA_EVENTS.forEach(nombreEvento => {
    //     const callback = props[`on${nombreEvento}`];        

    //     if (callback && typeof callback === 'function') {
    //         nodo.on(nombreEvento, (e) => {
    //             callback(e);
    //         });
    //     }
    // });

    registrarEventos(props, nodo);

    if (!staticProps) {
        nodo.on('dragend', (e) => {
            console.log('hola');
            
            x = e.currentTarget.attrs.x;
            y = e.currentTarget.attrs.y;
        })
    }

    capa.add(nodo);

    // Como estamos desestructurando x e y, necesitamos manejarlos por separado.
    Object.keys(props).filter(prop => !prop.startsWith('on')).forEach(prop => {
        $effect(() => {
            nodo.setAttr(prop, props[prop as keyof Konva.StageConfig]);
        })
    })

    $effect(() => {
        nodo.setAttr('x', x);
    })

    $effect(() => {
        nodo.setAttr('y', y);
    })


    onDestroy(() => {
        nodo.destroy();
    })

</script>