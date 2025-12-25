// function createCounter() {
//     let count = $state(0);

import { browser } from "$app/environment";

//     return {
//         get value() {
//             return count;
//         },
//         increment: () => {
//             count += 1;
//         },
//         reset: () => {
//             count = 0;
//         }
//     }
// }

// class Counter {
//     value = $state(0);

//     constructor() {
//         $effect(() => {
//             console.log(this.value);
            
//         })
//     }

//     increment = () => {
//         this.value += 1;
//     }

//     reset = () => {
//         this.value = 0;
//     }
// }

// // export default createCounter;
// export default Counter; 

// 2. Definir un estado compartido.

// let count = $state(0);

// export default {
//     get value() {
//         return count;
//     },
//     set value(v) {
//         count = v;
//     },
//     increment: () => {
//         count += 1;
//     },
//     reset: () => {
//         count = 0;
//     }
// }

// export function getCount() {
//     return count;
// }

// export function increment() {
//     count += 1;
// }

// export function reset() {
//     count = 0;
// }

// 3. Definir un estado compartido usando clases.

// class Counter {
//     value = $state(0);

//     constructor() {
//         // $effect(() => {
//         //     console.log(this.value);
//         // })
//     };

//     increment = () => {
//         this.value += 1;
//     };

//     reset = () => {
//         this.value = 0;
//     };
// }

// const counter = new Counter();

// export default counter;

// 4. Compartir estado con Proxy.
const storedCount = browser && localStorage.getItem('count'); // Verifica si estamos en el navegador.

const count = $state(
    storedCount ? JSON.parse(storedCount) : {value: 0}
);

// EL efecto raíz se ejecuta una vez al inicializar el módulo.
// Porque por defecto en un componente cuando se definen los efectos.
// Pero en un módulo no se ejecutan automáticamente.
$effect.root(() => {
    console.log("El contador se ha inicializado.");
    $effect(() => {
        // $effect.tracking() es una función que devuelve un booleano que indica si el efecto está siendo rastreado.
        console.log($effect.tracking());          
        console.log(count.value);
        localStorage.setItem('count', JSON.stringify(count))
    });
});

export default count

export function increment() {
    count.value += 1;
}

export function reset() {
    count.value = 0;
}

// 5. COmpartir estado con stores de Svelte.
// class Counter {
// 	#count = $state(0);

// 	get value() {
// 		const storedValue = browser && localStorage.getItem('count');
// 		if (storedValue) {
// 			this.#count = JSON.parse(storedValue);
// 		}
// 		return this.#count;
// 	}
// 	set value(v) {
// 		localStorage.setItem('count', JSON.stringify(v));
// 		this.#count = v;
// 	}

// 	increment = () => {
// 		this.value += 1;
// 	};
// 	reset = () => {
// 		this.value = 0;
// 	};
// }

// export default new Counter();