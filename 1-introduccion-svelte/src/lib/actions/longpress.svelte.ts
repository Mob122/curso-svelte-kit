import type { Action } from "svelte/action";

// Acción personalizada para detectar longpress (presión larga) en un botón.
// dentro <> se definen los tipos de los parámetros que recibe la acción y los eventos que puede emitir.
// El primer parámetro es el tipo del nodo HTML al que se aplica la acción (HTMLButtonElement).
// El segundo parámetro es un objeto de opciones que puede incluir una duración personalizada para el longpress.
// El tercer parámetro define los eventos personalizados que la acción puede emitir (en este caso, onlongpress).

const longpress: Action<HTMLButtonElement, () => {duracion?: number}, {onlongpress: (e: CustomEvent) => void }> = (nodo, getOptions) => {

    // nodo.dispatchEvent(new CustomEvent('longpress'));   

    $effect(() => { 
        const options = getOptions();
        // const duracion = options.duracion === undefined ? 1000 : options.duracion;
        const duracion = options?.duracion ?? 1000; // Estamos diciendo que si options.duracion es undefined o null, use 1000 como valor predeterminado.
        // console.log(duracion);
        // console.log('Montando longpress');
        
        let timer: ReturnType<typeof setTimeout>;

        function handleMousedown() {
            timer = setTimeout(() => {
                nodo.dispatchEvent(new CustomEvent('longpress'));
            }, duracion);
        }

        function handleMouseup() {
            clearTimeout(timer);
        }

        nodo.addEventListener('mousedown', handleMousedown);
        nodo.addEventListener('mouseup', handleMouseup);

        return () => {
            // console.log('Destruyendo longpress');
            clearTimeout(timer);
            nodo.removeEventListener('mousedown', handleMousedown);
            nodo.removeEventListener('mouseup', handleMouseup);
        }
    })
}

export default longpress;