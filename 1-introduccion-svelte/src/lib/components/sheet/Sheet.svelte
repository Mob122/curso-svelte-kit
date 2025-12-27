<script lang="ts">
	import { alfabeANumero, celdaAIndice, numeroAAlfabeto, type Celda } from "./sheet-utils";

    // console.log(alfabeANumero('Z'));
    // console.log(numeroAAlfabeto(26));
    // console.log(celdaAIndice('b1'));
    
    let { data = $bindable() } : { data: Celda[][] } = $props(); // bindable permite que la variable data sea vinculada desde el componente padre, con el fin de que los cambios realizados en el componente hijo se reflejen en el padre.

    let editarCelda: string | null = $state(null);
    let seleccionarCelda: string | null = $state(null);
    let seleccionarCeldaObjeto = $derived.by(() => {
        if (!seleccionarCelda) return null;
        const [row, col] = seleccionarCelda.split(',').map(Number);
        return data[row - 1]?.[col - 1] || null;
    })

    $inspect(seleccionarCeldaObjeto);

    let numFilas = $derived(data.length > 10 ? data.length : 10);
    let numColumnas = $derived.by(()  => {
        const largo = Math.max(...data.map(row => row.length))
        return largo > 10 ? largo : 10;
    });

    function init(el: HTMLInputElement) {
        el.focus(); // Enfoca el input al crearse porque de esta manera el usuario puede empezar a escribir directamente.
        el.select(); // Selecciona el texto dentro del input al crearse.
    }

    function setCelda(row: number, col: number, prop: 'value' | 'bgColor' | 'color', value: string) {
        if (data[row]) {
            if (data[row][col]) {
                data[row][col][prop] = value;
            } else {
                data[row][col] = {[prop]: value}
            }
        } else {
            data[row] = [];
            data[row][col] = {[prop]: value}
        }
    }

    function parseValue(value: string | undefined): string | number {
        if (!value) return ''; // el negativo de undefined o cadena vacía es falso, por lo que se retorna una cadena vacía.
        if (value.startsWith('=')) {
            const nombreFuncion = value.split('(')[0].substring(1);
            const args = value.replace(`=${nombreFuncion}`, '').replace(/[()]/g, '').split(',')
            const vals = args.map(arg => {
                const celda = celdaAIndice(arg);
                const val = data[celda.row - 1]?.[celda.col - 1]?.value;
                
                if (val?.startsWith('=')) {
                    return Number(parseValue(val)); // Llamada recursiva para evaluar fórmulas anidadas.
                }

                return val ? Number(val) : 0;
            })
            
            return vals.reduce(
                (prev, curr) => {
                    switch (nombreFuncion) {
                        case 'SUM':
                            return prev + curr;
                        case 'MULTIPLY':
                            return prev * curr;
                        default:
                            return 0;
                    }
                }, nombreFuncion === 'MULTIPLY' ? 1 : 0
            )
            
            
        } else {
            return value;
        }
    }
</script>

{#if seleccionarCelda}
    <br>
    <label for="bgColor">Background</label>
    <input type="color" name="bgColor" id="bgColor" value={seleccionarCeldaObjeto?.bgColor || '#ffffff'} 
        oninput={(e) => {
            if (!seleccionarCelda) return;
            const color = e.currentTarget.value;
            const [row, col] = seleccionarCelda?.split(',').map(Number);
            setCelda(row - 1, col - 1, 'bgColor', color);
        }}
    />
    <br>
    <label for="color">Color</label>
    <input type="color" name="color" id="color" value={seleccionarCeldaObjeto?.color || '#000000'} 
        oninput={(e) => {
            if (!seleccionarCelda) return;
            const color = e.currentTarget.value;
            const [row, col] = seleccionarCelda?.split(',').map(Number);
            setCelda(row - 1, col - 1, 'color', color);
        }}
    />
{/if}

<table class="border-collapse *:box-border">
    <tbody>
        {#each {length: numFilas + 1}, row }
            <tr>
                {#each {length: numColumnas + 1}, col }
                {@const celdaData = data[row - 1]?.[col - 1]}  
                {@const celdaActual = `${row},${col}`}                  
                    <svelte:element 
                        this={row === 0 || col === 0 ? 'th' : 'td'}
                        scope={row === 0 ? 'col' : col === 0 ? 'row' : undefined}
                        class="min-w-24 h-8 border border-[#393939] {row === 0 || col === 0 ? 'bg-[#191919]': 'bg-[#222]'} {seleccionarCelda === celdaActual && 'outline-2 outline-[#3257f8]'}"
                        style:background-color={celdaData?.bgColor}
                        style:color={celdaData?.color}
                        role="gridcell"
                        tabindex="0"
                        ondblclick={() => {
                            if (celdaActual === editarCelda || row === 0 || col === 0) {
                                return;
                            }
                            editarCelda = celdaActual;
                        }}
                        onclick={() => {
                            if (celdaActual === seleccionarCelda || row === 0 || col === 0) {
                                return;
                            }
                            seleccionarCelda = celdaActual;
                            editarCelda = null;
                        }}
                    >
                        {#if row === 0 && col > 0}                        
                            {numeroAAlfabeto(col)}                        
                        {/if}
                        {#if row > 0 && col === 0}
                            {row}
                        {/if}
                        {#if row > 0 && col > 0}
                            {#if editarCelda !== celdaActual}
                                {parseValue(celdaData?.value)}
                            {:else}
                            <input 
                                use:init
                                type="text"  
                                value={celdaData?.value || ''} 
                                class="border-none font-[16px] h-full m-0 p-1.5 w-full"
                                style:background-color={celdaData?.bgColor}
                                style:color={celdaData?.color}
                                oninput={(e) => {
                                    setCelda(row - 1, col - 1, 'value', e.currentTarget.value);
                                }}
                                onkeydown={(e) => {
                                    if (e.key === 'Enter' || e.key === 'Escape') {
                                        editarCelda = null;
                                    }
                                }}
                            />
                            {/if}
                            
                        {/if}
                    </svelte:element>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>