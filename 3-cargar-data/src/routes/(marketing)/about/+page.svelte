<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let pensamientos: { nombre: string, descripcion: string }[] = [
        {nombre: 'Pensamiento Sobre Mi', descripcion: 'Creo que cada persona un misterio por conocer'},
        {nombre: 'Pensamiento Sobre El Mundo', descripcion: 'El mundo es un lugar lleno de oportunidades'},
        {nombre: 'Pensamiento Sobre La Vida', descripcion: 'La vida es un regalo que debemos aprovechar al máximo'},
        {nombre: 'Pensamiento Sobre El Futuro', descripcion: 'El futuro pertenece a quienes creen en la belleza de sus sueños'},
    ]
</script>

<!-- <svelte:head>
    <title>NotaAhora | about</title>
    <meta property="og:title" content="NotaAhora | about" />
    <meta property="og:description" content="Pagina sobre mi vida" />
    <meta name="description" content="Pagina sobre mi vida" />
</svelte:head> -->

<div class="text-3xl">
    <h1>Mi nombre es 
        <span class="bg-linear-90 bg-clip-text from-neutral-400 to-red-700 font-bold text-transparent">
            Martin Abel Reyes Rojas
        </span>
    </h1>
    <div class="text-2xl">
        <p>Creo que cada persona un misterio por conocer y yo estoy experimientando esta sensación y me parece increible que cada persona es un mundo por conocer, nunca llegamos a conocer del todo a alguien y eso es lo que hace maravilloso a la vida, faltan palabras para decir lo que siento y creo, pero estoy escribiendo lo que mi corazón cree y siente, a veces pienso que solo estoy aquí para hacer cosas que hace que valga la pena seguir viviendo</p>
        <div class="grid grid-cols-2 gap-4 mt-4">
            {#each pensamientos as pensamiento}
                <article class="bg-gray-400/10 border border-amber-50/10 p-4 rounded-lg">
                    <h2 class="font-bold">{pensamiento.nombre}</h2>
                    <p>{pensamiento.descripcion}</p>
                </article>
            {/each}
        </div>
    </div>
</div>