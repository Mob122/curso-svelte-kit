<script lang="ts">
	// import { getCount, increment, reset } from "$lib/utils/counter.svelte";
    import counter, { increment, reset} from "$lib/utils/counter.svelte";
	// import createCounter from "$lib/utils/counter.svelte";

    
    // const contador = createCounter();
    // const contador = new Counter();      
    
    // const { increment, reset } = counter;

    
</script>

<div class="bg-black/50 px-4 py-2 rounded-md space-y-4">
    <h2 class="text-center text-5xl">{counter.value}</h2>
    <div class="flex gap-2 justify-center">
        <button class="bg-orange-500 cursor-pointer font-bold p-2 rounded" onclick={            
            increment
            
        }>Incrementar</button>
        <button class="bg-red-500 cursor-pointer font-bold p-2 rounded" onclick={            
            reset
            
        }>Reset</button>
    </div>
</div>