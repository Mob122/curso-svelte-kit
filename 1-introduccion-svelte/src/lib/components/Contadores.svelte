<script lang="ts">
	import { createContadorEstado, setContadorContext } from "$lib/contexts/contador-context.svelte";
	import { setContext, type Snippet } from "svelte";

    let { children, initialContador = 0 }: {
        children: Snippet,
        initialContador ?: number
    } = $props();

    // let count = $state({value: 0})
    // let count = $state(0)

    // setContext<{
    //     value: number,
    //     increment: () => void,
    //     reset: () => void
    // }>("contador", {
    //     get value() {
    //         return count
    //     },
    //     increment: () => {
    //         count += 1;
    //     },
    //     reset: () => {
    //         count = 0;
    //     }
    // });

    // 5. Usando un contexto personalizado más limpio.
    // setContadorContext({
    //     get value() {
    //         return count
    //     },
    //     increment: () => {
    //         count += 1;
    //     },
    //     reset: () => {
    //         count = 0;
    // }});

    setContadorContext(createContadorEstado(initialContador));
</script>

{@render children()}