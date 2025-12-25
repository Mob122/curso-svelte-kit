<script lang='ts'>
	import { SvelteDate } from "svelte/reactivity";

	// import ConvertidorMoneda from "$lib/components/ConvertidorMoneda.svelte";
	// import ConvertidorMonedaClass from "$lib/components/ConvertidorMonedaClass.svelte";

    // Sin la clase reactive de Svelte.
    // let date = $state(new Date());

    // $effect(() => {
    //     const interval = setInterval(() => {
    //         date = new Date();
    //     }, 1000);

    //     return () => clearInterval(interval);
    // })

    // Con la clase reactive de Svelte.
    let date = new SvelteDate();

    $effect(() => {
        const interval = setInterval(() => {
            date.setTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    })
    

</script>

<!-- <ConvertidorMonedaClass /> -->

<p>
    {
        date.getHours().toString().padStart(2, '0')
    }: 
    {
        date.getMinutes().toString().padStart(2, '0')
    }
    : 
    {
        date.getSeconds().toString().padStart(2, '0')
    }
</p>

<style>
    :global {
        body {
            background-color: #222;
            color: #fff;
        }
    }
</style>