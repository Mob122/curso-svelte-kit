<script lang="ts">
	import { page } from '$app/state';
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props();

    console.log(page);
    
</script>

<div class="bg-purple-700 border-2 p-2">
    <h1 class="mb-2 text-3xl">About Layout</h1>
    <div class="flex gap-4">
        <div class="bg-amber-700 w-50">
            <nav class="p-2">
                <ul>
                    <li class="{page.url.pathname == '/about' ? 'underline' : ''}"><a href="/about">About</a></li>
                    <li class="{page.url.pathname == '/about/team' ? 'underline' : ''}"><a href="/about/team">Team</a></li>
                </ul>
            </nav>
        </div>
        <div class="flex-1">
            {@render children()}
        </div>
    </div>
</div>