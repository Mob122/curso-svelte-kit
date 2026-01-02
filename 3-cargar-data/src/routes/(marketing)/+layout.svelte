<script lang="ts">
	import { page } from '$app/state';
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props();

    let path: [string, string][] = [
        ['/', 'home'],
        ['/about', 'about'],
        ['/blog', 'blog']
    ]
</script>

<header class="">
    <nav class="flex gap-2 justify-center items-center text-2xl">
        <ul class="flex-1 flex gap-4 justify-center">
            {#each path as [href, label]}
                <li><a class={[page.url.pathname === href ? 'font-bold underline' : 'opacity-50', 'cursor-pointer duration-200 transition-all']} href={href}>{label}</a></li>                
            {/each}            

        </ul>
        {#if data.user}
            <div class="flex gap-2 items-center">
                <span class="bg-blue-500 rounded p-1">
                    <a href="/dashboard">{data.user.name}</a>
                </span>
                <a href="/logout">Logout</a>
            </div>    
        {:else}
            <div class="flex gap-2">
                <a href="/signup">Signup</a>
                <a href="/login">Login</a>
            </div>
        {/if}
    </nav>
</header>

{@render children()}