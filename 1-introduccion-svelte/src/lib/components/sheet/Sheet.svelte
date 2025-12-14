<script lang="ts">
	import { alfabeANumero, celdaAIndice, numeroAAlfabeto, type Celda } from "./sheet-utils";

    // console.log(alfabeANumero('Z'));
    // console.log(numeroAAlfabeto(26));
    // console.log(celdaAIndice('b1'));
    
    let { data } : { data: Celda[][] } = $props();

    let numFilas = $derived(data.length > 10 ? data.length : 10);
    let numColumnas = $derived.by(()  => {
        const largo = Math.max(...data.map(row => row.length))
        return largo > 10 ? largo : 10;
    });
</script>

<table class="border-collapse *:box-border">
    <tbody>
        {#each {length: numFilas + 1}, row }
            <tr>
                {#each {length: numColumnas + 1}, col }
                {@const celdaData = data[row - 1]?.[col - 1]?.value}                    
                    <svelte:element 
                        this={row === 0 || col === 0 ? 'th' : 'td'}
                        scope={row === 0 ? 'col' : col === 0 ? 'row' : undefined}
                        class="min-w-24 h-8 border border-[#393939] {row === 0 || col === 0 ? 'bg-[#191919]': 'bg-[#222]'}"
                    >
                        {console.log(col)}
                        {#if row === 0 && col > 0}                        
                            {numeroAAlfabeto(col)}                        
                        {/if}
                        {#if row > 0 && col === 0}
                            {row}
                        {/if}
                        {#if row > 0 && col > 0}
                            {celdaData || ''}
                        {/if}
                    </svelte:element>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>