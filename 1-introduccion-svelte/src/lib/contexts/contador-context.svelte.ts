import { getContext, hasContext, setContext } from "svelte";

type ContadorContext = {
    value: number;
    increment: () => void;
    reset: () => void;
}

// Simbol en javascript se refiere a un valor unico, es decir, que si creamos dos simbolos con el mismo nombre, estos seran diferentes.
const key = Symbol('contador'); 

export function setContadorContext(contador: ContadorContext) {
    setContext(key, contador);
}

export function getContadorContext() {
    return getContext(key) as ContadorContext; // Es lo mismo que getContext<ContadorContext>(key);
}

export function hasContadorContext() {
    return hasContext(key);
}

export function createContadorEstado(initial = 0) {
    let count = $state(initial);    

    return {
        get value() {
            return count;
        },
        increment() {
            count += 1;
        },
        reset() {
            count = 0;
        }
    }
}
