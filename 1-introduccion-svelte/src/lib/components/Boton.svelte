<script lang="ts">
	import type { Snippet } from "svelte";

    interface Props {
        izquierda: Snippet;
        derecha: Snippet;
        children: Snippet;
    }

    let { izquierda, derecha, children }: Props = $props();
</script>

<!-- {#snippet sumar(a: number, b:number)}
    {#snippet negrita(x: string)}
        <strong>{x}</strong>
    {/snippet}
    <span>{a} + {b} = {@render negrita(`${a + b}`)}</span>
{/snippet} -->

<button class="bg-amber-400 cursor-pointer flex font-bold gap-2 px-4 py-2 rounded-md">
    {#if izquierda}
        <div>
            {@render izquierda()}
        </div>   
    {:else}
        <div class="w-6"></div>
    {/if}
    <!-- {@render izquierda?.()} -->
    {@render children()}

    {#if derecha}
        <div>
            {@render derecha()}
        </div>   
    {/if}
</button>

<!-- {@render sumar(3, 5)} -->