import { cubicInOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

export default function spin(node: HTMLElement, { delay = 0, duration = 400, easing = cubicInOut, spin = 1}): TransitionConfig {

    // getComputedStyle permite acceder a los estilos CSS aplicados a un elemento.
    const originalOpacity = +getComputedStyle(node).opacity;
    const originalRotation = getComputedStyle(node).transform.replace('none', '')
    console.log(originalRotation);
    

    return {
        delay,
        duration,
        easing,
        css: (t) => {
            return `
                opacity: ${t * originalOpacity};
                transform: ${originalRotation} scale(${t}) rotate(${spin * 360 * t}deg);
            ` 
        }
    }
}