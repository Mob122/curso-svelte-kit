<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<!-- <svelte:head>
    <title>NotaAhora</title>
    <meta property="og:title" content="NotaAhora" />
    <meta property="og:description" content="Pagina sobre la vida" />
    <meta name="description" content="Pagina sobre la vida" />
</svelte:head> -->

<div class="flex gap-8 text-3xl mt-10">
    <h1 class="text-4xl">
        Bienvenidos a mi pagina
        <span class="block font-bold text-green-800">
            sobre la Vida
        </span>
    </h1>
    <p class="max-w-3xl">
        La pagina nace a raíz de un sueño propio y con un grupo de personas que estamos dispuestos a darlo todo para escapar del sistema y vivir la vida que merecemos, libertad financiera y de tiempo.
    </p>
</div>