<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<article class="bg-gray-500/15 p-5 rounded-md space-y-8 text-xl mt-10">
    <div class="space-y-4">
        <h1 class="font-bold text-5xl">{data.post.title}</h1>
        <p>{data.post.body}</p>
    </div>
    <div class="flex gap-4">
        {#each data.post.tags as tag}
            <span class="bg-gray-400/10 p-1 rounded">{tag}</span>
        {/each}
    </div>

    {#await data.comments}
        {#each {length: 4}}
            <div class="card border-base-300 mt-4 rounded-md border p-4">
                <div class="skeleton mb-2 h-4 w-full rounded-md"></div>
                <div class="skeleton mb-2 h-4 w-full rounded-md"></div>
                <div class="skeleton mb-2 h-4 w-50 rounded-md"></div>
            </div> 
        {/each}
    {:then comments}
        {#if comments.length > 0}
            <h2 class="font-bold text-3xl">Comentarios</h2>
            <div>
                {#each comments as comentario}
                    <div class="first:border-t border-b border-gray-400/20 py-2">
                        <h3 class="font-bold">{comentario.user.username}</h3>
                        <p class="text-[16px]">{comentario.body}</p>
                    </div>
                {/each}
            </div>
        {/if}
    {/await}

</article>