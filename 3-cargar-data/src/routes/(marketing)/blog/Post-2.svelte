<script lang="ts">
    import type { Post } from "$lib/types";

    let { post }: { post: Post } = $props();
</script>

<article class="bg-gray-400/10 rounded-xl">
    <a class="flex flex-col justify-between p-3 space-y-1 text-xl h-full" href="/blog/{post.id}">
        <div>
            <h2 class="bg-clip-text bg-linear-to-br font-bold from-yellow-200 to-blue-500 text-transparent text-2xl">{post.title}</h2>
            <p class="text-gray-400 text-lg">{post.body.slice(0, 200)}...</p>
        </div>
        
    </a>
</article>