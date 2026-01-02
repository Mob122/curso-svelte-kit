<script lang="ts">
	import { page } from '$app/state';
	import { POSTS_POR_PAGINA } from '$lib/constants';
	import type { PostsResponse } from '$lib/types';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();    

    let paginaActual: number = $derived(+(page.url.searchParams.get('page') || '1'));    
    
    let posts = $derived(data.posts.posts);
    let esCargando: boolean = $state(false);
    let primeraPaginaCargada: number = $derived(paginaActual);
    let ultimaPaginaCargada: number = $derived(paginaActual);

    async function cargarMasPosts() {
        esCargando = true;

        const nuevosPosts = await fetch(`https://dummyjson.com/posts?limit=${POSTS_POR_PAGINA}&skip=${ultimaPaginaCargada * POSTS_POR_PAGINA}`);
        const nuevosPostsJSON: PostsResponse = await nuevosPosts.json();
        
        posts = [...posts, ...nuevosPostsJSON.posts]
        ultimaPaginaCargada = (nuevosPostsJSON.skip / POSTS_POR_PAGINA) + 1;
        esCargando = false;
    }
</script>

<section class="space-y-2">
    <h1 class="font-bold text-3xl">{data.title}</h1>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 mt-2">
        <!-- {#each data.posts.posts as post}
            <data.component {post} />
        {/each} -->
        {#each posts as post}
            <data.component {post} />
        {/each}
    </div>

    <div class="flex no-js:hidden mt-10 justify-center">
        {#if Math.ceil(data.posts.total / POSTS_POR_PAGINA) !== ultimaPaginaCargada}            
            <button disabled={esCargando} class="btn btn-outline" onclick={cargarMasPosts}>Cargar más</button>
        {:else}
            <p class="text-center text-gray-500">No hay más posts para cargar.</p>
        {/if}
    </div>

    <div class="no-js:flex hidden justify-end">
        <div class="gap-4 grid grid-cols-2 join max-w-125 mt-10 w-full">
            {#if paginaActual > 1}
                <a class="btn join-item btn-outline" href="/blog?page={paginaActual - 1}">Pagina anterior</a>
            {/if}
            {#if Math.ceil(data.posts.total / POSTS_POR_PAGINA) !== paginaActual}
                <a class="btn join-item btn-outline" href="/blog?page={paginaActual + 1}">Pagina siguiente</a>
            {/if}
        </div>
    </div>
</section>

