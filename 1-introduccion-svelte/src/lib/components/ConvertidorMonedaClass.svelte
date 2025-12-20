<script lang="ts">
    import ConvertidorMoneda from "$lib/utils/currency-converter.svelte";

    const cc = new ConvertidorMoneda(1, 'usd', 'eur'); // Es mejor evitar destructurar clases en Svelte porque pierde reactividad por la manera en que Svelte detecta cambios.

    

    // // Si no quieres que se ejecute al inicio, puedes hacer esto.
    // fetchTasasCambio();

    
</script>

{#if cc.error}
    <p>{cc.error}</p>
{:else if cc.cargando}
    <p>Cargando...</p>
{:else}
<!-- {(console.log(monedas))} -->
<div class="bg-[#131313] py-4 px-2 rounded-md">    
    <div class="mb-5">
        <span class="block opacity-60 mb-1.5">
            {
                Number(1).toLocaleString('es-PE', {
                    style: 'currency',
                    currency: cc.monedaActual,
                    currencyDisplay: 'name'
                })                 
            } equivale
        </span>

        <span class="block font-bold text-3xl">
            {
                Number(cc.tasa).toLocaleString('es-PE', {
                    style: 'currency',
                    currency: cc.monedaObjetivo,
                    currencyDisplay: 'name'
                })
            }
        </span>
    </div>

    <div class="mb-3.5">
        <!-- <input type="number" 
        class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400"
        bind:value={() => valorBase, 
        (value) => {
            if (value && value < 0) {
                valorBase = 0; 
                return;
            }
            valorBase = value;
        }}> -->
        <!-- <input type="number" 
        class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400"
        value={valorBase}
        oninput={(e) => {
            actualizarValorBase(+e.currentTarget.value); // + al principio para convertir a number.
        }}
        > -->
        <input type="number" 
        class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400"
        bind:value={cc.valorBase}        
        >
        
        <!-- <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorBaseSeleccionar" id="valorBaseSeleccionar" bind:value={monedaActual}> -->
         <!-- <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorBaseSeleccionar" id="valorBaseSeleccionar" value={monedaActual} oninput={(e) => {
            actualizarMonedaActual(e.currentTarget.value)
         }}> -->
          <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorBaseSeleccionar" id="valorBaseSeleccionar" bind:value={cc.monedaActual}>
            <!-- <option value="usd">United States Dollar</option>
            <option value="eur">Euro</option>
            <option value="gpb">British Pound</option> -->
            {#each Object.entries(cc.monedas) as [key, value]}
                <option value={key}>{value || key}</option>
            {/each}
        </select>
    </div>

    <div>
        <!-- <input class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" type="number" bind:value={valorObjetivo}> -->
         <!-- <input class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" type="number" value={valorObjetivo} oninput={(e) => {
            actualizarValorObjetivo(+e.currentTarget.value)}}> -->
        <input class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" type="number" bind:value={cc.valorObjetivo}>
        <!-- <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorObjetivoSeleccionar" id="valorObjetivoSeleccionar" bind:value={monedaObjetivo}> -->
        <!-- <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorObjetivoSeleccionar" id="valorObjetivoSeleccionar" value={monedaObjetivo} oninput={(e) => {
            actualizarMonedaObjetivo(e.currentTarget.value)
        }}> -->
        <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorObjetivoSeleccionar" id="valorObjetivoSeleccionar" bind:value={cc.monedaObjetivo} >
            <!-- <option value="usd">United States Dollar</option>
            <option value="eur">Euro</option>
            <option value="gpb">British Pound</option> -->
            {#each Object.entries(cc.monedas) as [key, value]}
                <option value={key}>{value || key}</option>
            {/each}
        </select>
    </div>

    <div class="flex gap-2 justify-end mt-2.5">
        <button class="bg-orange-500 cursor-pointer font-bold px-4 py-2 rounded-md text-xs" onclick={() => {
            cc.switch()
        }}>
            Intercambiar
        </button>        
        <button class="bg-orange-500 cursor-pointer font-bold px-4 py-2 rounded-md text-xs" onclick={() => {
            cc.reset()
        }}>
            Restablecer
        </button>        
    </div>
    
</div>
{/if}

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>