<script lang="ts">
    import { rates } from '$lib/utils/dummy-rates'
	import { untrack } from 'svelte';

    // let valorBase: number | undefined = $state(1);
    // let monedaActual = $state('usd');
    // let tasaCambioActual = $derived(rates[monedaActual]);

    // let monedaObjetivo = $state('eur');
    // let valorObjetivo: number | undefined = $state(calularValorObjetivo());

    // Fetching.
    let valorBase: number | undefined = $state(1);
    let monedaActual = $state('usd');
    let tasaCambioActual: Record<string, number> = $state({});

    let monedaObjetivo = $state('eur');

    let valorObjetivo = {
        get value() {
            console.log('valorObjetivo', calularValorObjetivo());
            return calularValorObjetivo();
        },
        set value(v) {
            console.log('valorBase', calularValorBase(v));            
            valorBase = calularValorBase(v);
        }
    }

    // let monedas = $state({});
    const monedasPromesa = fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
    .then(response => response.json());

    // 2. Cuidado con usar los effects, funciona pero hace calculos innecesarios.
    // $effect(() => {
    //     // Depende de valorBase.
    //     valorObjetivo = valorBase && tasaCambioActual[monedaObjetivo] && valorBase * tasaCambioActual[monedaObjetivo];

    //     console.log('Calculando Objetivo', 
    //         untrack(() => valorObjetivo) // untrack: No queremos que este efecto se vuelva a ejecutar si valorBase cambia.
    //     );
    // })

    // $effect(() => {
    //     // Depende de valorObjetivo.
    //     valorBase = valorObjetivo && tasaCambioActual[monedaObjetivo] && valorObjetivo / tasaCambioActual[monedaObjetivo];
        

    //     console.log('Calculando Base', 
    //         untrack(() => valorBase) // untrack: No queremos que este efecto se vuelva a ejecutar si valorObjetivo cambia.
    //     );
    // })

    function calularValorObjetivo() {
        return valorBase && tasaCambioActual[monedaObjetivo] && +(valorBase * tasaCambioActual[monedaObjetivo]).toFixed(3);
    }

    function calularValorBase(valorObjetivo?: number) {
        return valorObjetivo && tasaCambioActual[monedaObjetivo] && +(valorObjetivo / tasaCambioActual[monedaObjetivo]).toFixed(3);
    }

    // const actualizarValorBase = (value: number) => {
    //     valorBase = value;
    //     valorObjetivo = calularValorObjetivo();
    //     console.log('Calculando Objetivo', valorObjetivo);
        
    // }   

    // const actualizarValorObjetivo = (value: number) => {
    //     valorObjetivo = value;
    //     valorBase = calularValorBase();
    //     console.log('Calculando Base', valorBase);
    // }

    // function actualizarMonedaActual(value: string) {
    //     monedaActual = value;
    //     valorObjetivo = calularValorObjetivo();
    //     console.log('Calculando Objetivo después de cambiar moneda actual', valorObjetivo);                
    // }

    // function actualizarMonedaObjetivo(value: string) {
    //     monedaObjetivo = value;
    //     valorBase = calularValorBase();
    //     console.log('Calculando Objetivo después de cambiar moneda objetivo', valorObjetivo);
    // }

    // 3. $derived no es solo lectura, también puede usarse para escribir en la nueva versión de Svelte.

    // 4. Fetching de datos reales (Fetching significa en español "obtener" o "recuperar" datos de una fuente externa).
    // $effect(() => {
    //     (
    //         // Una forma.
    //         async () => {
    //         const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
    //         const responseJSON = await response.json();
    //         // monedas = responseJSON;
    //     }
    //     )()
    // })

    async function fetchTasasCambio() {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/' + monedaActual + '.json');
        const responseJSON = await response.json();
        tasaCambioActual = responseJSON[monedaActual];
    }

    // Llamar a fetchTasasCambio cada vez que monedaActual cambie.
    // $effect(() => {
    //     fetchTasasCambio();
    // });

    // Si no quieres que se ejecute al inicio, puedes hacer esto.
    fetchTasasCambio();

    // 4. Clases Reactivas (Reactive Classes).
    class ConvertidorMoneda {
        valorBase: number | undefined = $state(1);
    }

    const cc = new ConvertidorMoneda();

    $effect((() => {
        console.log('Clase Reactiva - valorBase:', cc.valorBase);
    }))
</script>

{#await monedasPromesa}
    <p>Cargando monedas...</p>    
{:then monedas} 
<!-- {(console.log(monedas))} -->
<div class="bg-[#131313] py-4 px-2 rounded-md">    
    <div class="mb-5">
        <span class="block opacity-60 mb-1.5">
            {
                Number(1).toLocaleString('es-PE', {
                    style: 'currency',
                    currency: monedaActual,
                    currencyDisplay: 'name'
                })                 
            } equivale
        </span>

        <span class="block font-bold text-3xl">
            {
                Number(tasaCambioActual[monedaObjetivo]).toLocaleString('es-PE', {
                    style: 'currency',
                    currency: monedaObjetivo,
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
        bind:value={valorBase}        
        >
        
        <!-- <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorBaseSeleccionar" id="valorBaseSeleccionar" bind:value={monedaActual}> -->
         <!-- <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorBaseSeleccionar" id="valorBaseSeleccionar" value={monedaActual} oninput={(e) => {
            actualizarMonedaActual(e.currentTarget.value)
         }}> -->
          <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorBaseSeleccionar" id="valorBaseSeleccionar" bind:value={monedaActual} onchange={() => {
            fetchTasasCambio();
          }}>
            <!-- <option value="usd">United States Dollar</option>
            <option value="eur">Euro</option>
            <option value="gpb">British Pound</option> -->
            {#each Object.entries(monedas) as [key, value]}
                <option value={key}>{value}</option>
            {/each}
        </select>
    </div>

    <div>
        <!-- <input class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" type="number" bind:value={valorObjetivo}> -->
         <!-- <input class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" type="number" value={valorObjetivo} oninput={(e) => {
            actualizarValorObjetivo(+e.currentTarget.value)}}> -->
        <input class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" type="number" bind:value={valorObjetivo.value}>
        <!-- <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorObjetivoSeleccionar" id="valorObjetivoSeleccionar" bind:value={monedaObjetivo}> -->
        <!-- <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorObjetivoSeleccionar" id="valorObjetivoSeleccionar" value={monedaObjetivo} oninput={(e) => {
            actualizarMonedaObjetivo(e.currentTarget.value)
        }}> -->
        <select class="bg-transparent border border-white/10 p-2.5 rounded-md text-white focus-visible:outline-1 outline-blue-400" name="valorObjetivoSeleccionar" id="valorObjetivoSeleccionar" bind:value={monedaObjetivo} onchange={() => {
            fetchTasasCambio();
        }}>
            <!-- <option value="usd">United States Dollar</option>
            <option value="eur">Euro</option>
            <option value="gpb">British Pound</option> -->
            {#each Object.entries(monedas) as [key, value]}
                <option value={key}>{value}</option>
            {/each}
        </select>
    </div>
</div>
{:catch error}
    <p>Error al cargar las monedas: {error.message}</p>
{/await}

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>