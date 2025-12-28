import type { Action } from "svelte/action";
import tippyjs, { type Props } from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import type { Attachment } from "svelte/attachments";

// Partial es para que no sea obligatorio definir todas las props.
const tippy: Action<HTMLElement, () => Partial<Props>> = (nodo, getOptions) => {
    const tooltop = tippyjs(nodo, getOptions());

    $effect(() => {
        // Actualizar las opciones cuando cambien.
        tooltop.setProps(getOptions());
    })

    $effect(() => {

        // Destruir el tooltip cuando el elemento se elimine del DOM.
        return () => {
            tooltop.destroy();
        }
    })
}


export const tippy2 = (options: Partial<Props>): Attachment => {
    return (element) => {
        const tooltip = tippyjs(element, options);

        // el return es el cleanup function.
        return () => tooltip.destroy();
    }
}

export default tippy;


