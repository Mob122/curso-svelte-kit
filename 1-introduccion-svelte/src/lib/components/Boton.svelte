<script lang="ts">
	import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

    
    type Props =  ((HTMLButtonAttributes & {href?: never}) | (HTMLAnchorAttributes) | {href: string}) & {
        izquierda: Snippet<[boolean]>;
        derecha: Snippet;
        children: Snippet<[boolean]>;
        size?: "sm" | "md" | "lg";
        shadow?: boolean;
        class?:  { [key: string]: boolean };
        // bgColor?: string;
        // textColor?: string;
        onlefthover?: () => void;
    }
    
    let buton: HTMLButtonElement;
    let isIzquierdaHovered = $state(false);
    let { izquierda, derecha, size = 'md', shadow = false, children, class: _class, onlefthover, ...props }: Props = $props();

    export function focus() {
        buton?.focus();

    }

    export function getButton() {
        return buton;
    }
</script>

<!-- {#snippet sumar(a: number, b:number)}
    {#snippet negrita(x: string)}
        <strong>{x}</strong>
    {/snippet}
    <span>{a} + {b} = {@render negrita(`${a + b}`)}</span>
{/snippet} -->

<p>Valor {isIzquierdaHovered}</p>

<!-- <button class={{"bg-amber-400 cursor-pointer flex font-bold gap-2 px-4 py-2 rounded-md": true, "text-sm": size === 'sm', "text-xl": size === 'md', "text-lg": size === 'lg', "shadow-2xl": shadow}} -->
 <div class="flex">
     <svelte:element 
         this={props.href ? 'a' : 'button'}
         bind:this={buton}
         class={[_class, "bg-amber-400 cursor-pointer flex font-bold gap-2 px-4 py-2 rounded-md", size === 'sm' && 'text-xl', size === 'md' && 'text-3xl', size === 'lg' && 'text-7xl', shadow && 'shadow-2xl']}
         onmouseenter={() => { onlefthover?.(); isIzquierdaHovered = true; }}
         onmouseleave={() => isIzquierdaHovered = false}
     
         {...props}
         >
         <!-- style="background-color: {bgColor}; color: {textColor}"   -->
         <!-- style:background-color|important={bgColor} -->
         <!-- style:--buttonBgColor={bgColor}x
     style:--buttonTextColor={textColor} -->
         {#if izquierda}
             <div>
                 {@render izquierda(isIzquierdaHovered)}
             </div>   
         {:else}
             <div class="w-6"></div>
         {/if}
         <!-- {@render izquierda?.()} -->
         {@render children(isIzquierdaHovered)}
     
         {#if derecha}
             <div>
                 {@render derecha()}
             </div>   
         {/if}
     </svelte:element>
 </div>


<!-- {@render sumar(3, 5)} -->

<style>
    button {
        background-color: var(--buttonBgColor, #fbbf24);
        color: var(--buttonTextColor, #000000);
        transition: background-color 0.3s, color 0.3s;
    }
</style>