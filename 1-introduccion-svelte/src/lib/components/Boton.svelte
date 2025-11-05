<script lang="ts"></script>

{#snippet sumar(a: number, b:number)}
    {#snippet negrita(x: string)}
        <strong>{x}</strong>
    {/snippet}
    <span>{a} + {b} = {@render negrita(`${a + b}`)}</span>
{/snippet}

<button class="bg-amber-400 cursor-pointer font-bold px-4 py-2 rounded-md">
     Texto
</button>

{@render sumar(3, 5)}