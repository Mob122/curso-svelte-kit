<script lang="ts">
	import { createContadorEstado, getContadorContext, hasContadorContext } from "$lib/contexts/contador-context.svelte";

	// import { getCount, increment, reset } from "$lib/utils/counter.svelte";
    // import counter, { increment, reset} from "$lib/utils/counter.svelte";
	// import createCounter from "$lib/utils/counter.svelte";

    
    // const contador = createCounter();
    // const contador = new Counter();      
    
    // const { increment, reset } = counter;

    // 3. Using context API.
    // import { getAllContexts, getContext, hasContext } from "svelte";

    // const hasCountContext = hasContext('contador');

    // function crearEstadoLocal() {
    //     let value = $state(0);

    //     return {
    //         get value() {
    //             return value;
    //         },
    //         increment() {
    //             value += 1;
    //         },
    //         reset() {
    //             value = 0;
    //         }
    //     }
    // }

    // let count = hasCountContext ? getContext<{
    //     value: number,
    //     increment: () => void,
    //     reset: () => void
    // }>("contador") : crearEstadoLocal();

    // console.log(count);
    // console.log(getAllContexts());

    let count = hasContadorContext() ? getContadorContext() : createContadorEstado();    
    
</script>

<div class="bg-black/50 px-4 py-2 rounded-md space-y-4">
    <h2 class="text-center text-5xl">{count.value}</h2>
    <div class="flex gap-2 justify-center">
        <button class="bg-orange-500 cursor-pointer font-bold p-2 rounded" onclick={            
            count.increment
            
        }>Incrementar</button>
        <button class="bg-red-500 cursor-pointer font-bold p-2 rounded" onclick={            
            count.reset            
        }>Reset</button>
    </div>
</div>