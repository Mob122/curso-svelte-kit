<script lang="ts">
    // let nombre: string = "Martin";
    let primerNombre: string = $state("Martin"); // La runa $state crea una variable reactiva.
    let apellido: string = $state("Reyes");

    let nombreCompleto: string = $derived.by(() => {
        console.log("Calculando nombre completo...");
        return `${primerNombre} ${apellido}`;
    }); // La runa $derived crea una variable derivada de otras reactivas.

    let nombreUsuario = $state("mob122");

    let src: string = "https://svelte.dev/svelte-logo-horizontal.svg";
    let html = 'Hola, <b>Svelte</b>';

    $effect(() => {
        if (nombreUsuario || nombreCompleto) {
             console.log("El usuario tiene el nombre completo o el nombre de usuario");
             
        }
    })
</script>

<!-- Se puede pasar variables sin simbolo de dolar -->
<!-- <img {src} alt="Svelte Logo {nombre}" />  -->
 
<!-- <h1>¡Hola, soy {nombre.toLocaleUpperCase()}!</h1> -->

<!-- oninput={(e) => {
    nombreUsuario = e.currentTarget.value;
}} -->

<button onclick={() => {
    console.log(nombreCompleto);
}}>¡Obtener el nombre completo!</button>
<input type="text" bind:value={nombreUsuario} >
<input type="text" bind:value={primerNombre} >
<input type="text" bind:value={apellido} >

<h1>{nombreUsuario || nombreCompleto}</h1>

<!-- Para mostrar HTML -->
<p>{@html html}</p> 

<style>
    h1 {
        color: green;
        font: 2rem sans-serif;
    }
</style>