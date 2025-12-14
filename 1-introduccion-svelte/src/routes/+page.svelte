<script lang="ts">
	import Notification from "$lib/components/Notification.svelte";
	import Sheet from "$lib/components/sheet/Sheet.svelte";
    // 1. Proxy es una característica avanzada de JavaScript que permite crear un objeto que envuelve a otro objeto (llamado target) y intercepta las operaciones realizadas sobre él, como la lectura y escritura de propiedades.
    // const target = {
    //     nombre: 'Martin',
    //     apellido: 'Reyes',
    //     ocupaciones: [],
    //     get fullName() {
    //         return `${this.nombre} ${this.apellido}`;
    //     },
    //     set ocupacion(value: string) {
    //         console.log('Agregando ocupación:', value);
    //         this.ocupaciones.push(value);
            
    //     }
    // };

    // target.nombre = 'Abel';
    // target.ocupacion = 'Ingeniero de Sistemas';

    // console.log(target);

    // Handler es un objeto que define las operaciones que se interceptarán.
    // const hander = {
    //     get(target, prop) {
    //         return prop in target ? target[prop] : 'NA';
    //     },
    //     set(target, prop, value) {
    //         if (['nombre', 'apellido'].includes(prop)) {
    //             if (typeof value !== 'string') {
    //                 throw new TypeError(`La propiedad ${prop} debe ser una cadena de texto.`);                    
    //             }
    //         }
    //         target[prop] = value;
    //         return true;
    //     }
    // }

    // Proxy es el objeto que envuelve al target y aplica el handler.
    // const proxy = new Proxy(target, hander);
    // proxy.nombre = 'Abel';

    // console.log(proxy.nombre);
    
    // 2. Reactividad de Estados Profundo es una característica de Svelte que permite que los cambios en las propiedades anidadas de un objeto o en los elementos de un array sean detectados automáticamente por el sistema de reactividad de Svelte.
    // let array = $state([1, 2, 3, 4]);
    // let arrayObjetos = $state([{id: 1}, {id: 2}])
    // let objeto = $state({
    //     nombre: 'Martin',
    //     apellido: 'Reyes',
    //     direccion: {
    //         ciudad: 'Buenos Aires',
    //         pais: 'Argentina'
    //     }
    // });

//     // console.log(array, arrayObjetos, objeto);
    
//     $effect(() => {
//         console.log("Efecto del objeto");
//         console.log(objeto);        
//     })

//     $effect(() => {
//         console.log("Efecto del objeto.nombre");
//         console.log(objeto.nombre);        
//     })

//     $effect(() => {
//         console.log("Efecto del objeto.direccion.ciudad");
//         console.log(objeto.direccion.ciudad);
//     })

//     $effect(() => {
//         console.log("Efecto del array");
//         console.log(array);        
//     })

//     // $effect(() => {
//     //     console.log("Efecto del tamaño del array");
//     //     console.log(array.length);        
//     // })

// //    $effect(() => {
// //         console.log(array.length);        
// //         array[array.length] = 1;

// //    })

    // 3. $inspect(objecto) es una función en Svelte que permite inspeccionar el estado reactivo de un objeto o array. Al llamar a esta función con un objeto o array reactivo como argumento, se obtiene una representación detallada de su estructura y valores actuales, lo que facilita la depuración y el análisis del estado de la aplicación.
    // $inspect(objeto).with(console.trace);

    // $effect(() => {
    //     $inspect.trace();
    //     console.log(objeto.nombre);
    //     console.log(objeto.direccion.ciudad);
        
    // })


    // import { generateNotifications } from "$lib/utils/generate-notifications";
    
    // let notificaciones = $state(generateNotifications(3));
    // let notificaciones = $state.raw(generateNotifications(3)); // Utiliza .raw para evitar proxies anidados, para casos como este donde cada notificación es un objeto de un servicio externo y yo sé que no voy a mutar esas notificaciones individualmente.

    // console.log(notificaciones);

    // $inspect(notificaciones);

    // 4. Definición de una variable llamada datos.
    let data = $state([
        [
            { value: 'Item', bgColor: '#6aa84f', color: '#fff'},
            { value: 'Precio', bgColor: '#6aa84f', color: '#fff'},
            { value: 'Cantidad', bgColor: '#6aa84f', color: '#fff'},
            { value: 'Total', bgColor: '#51803d', color: '#fff'}
        ],
        [{ value: 'Manzanas' }, { value: "1.5" }, { value: "4" }, {value: '=MULTIPLY(B2,C2)'}],
        [{ value: 'Naranjas' }, { value: "2.0" }, { value: "3" }, {value: '=MULTIPLY(B3,C3)'}],
        [{ value: 'Plátanos' }, { value: "1.2" }, { value: "5" }, {value: '=MULTIPLY(B4,C4)'}],
        [{ value: 'Peras' }, { value: "1.8" }, { value: "2" }, {value: '=MULTIPLY(B5,C5)'}],
        [
            { value: '', bgColor: '#6aa84f', color: '#fff' },
            { value: '', bgColor: '#6aa84f', color: '#fff' },
            { value: 'Total', bgColor: '#6aa84f', color: '#fff' },
            { value: '=SUM(D2, D3, D4, D5)', bgColor: '#51803d', color: '#fff' },
        ]
    ])
        
</script>

<!-- 1_2_3. Entendiendo la Reactividad Profunda en Svelte -->
<!-- {@debug objeto, array}
<h2>{objeto.nombre}</h2>
<h2>{objeto.direccion.ciudad}</h2>

<input bind:value= {objeto.nombre}>
<input bind:value={objeto.direccion.ciudad}>
<input bind:value={objeto.direccion.pais}>

<button
    onclick={() => {
        array.push(Math.random() * 10)
    }}
>
    Agregador al arreglo
</button>

<button onclick={() => {
    // Para obtener una instantánea (snapshot) del estado actual de un objeto o array reactivo en Svelte, puedes utilizar el método `$state.snapshot()`. Este método crea una copia inmutable del estado actual, lo que te permite inspeccionar o trabajar con los datos sin afectar la reactividad del estado original.
    // Snapshot significa "instantánea" en inglés que hace referencia a una copia o representación de un estado en un momento específico en el tiempo que nos permite capturar y analizar cómo se veían los datos en ese instante sin que esos datos cambien posteriormente, con el fin no retornar un Proxy sino el objeto plano.
    // Proxy es un objeto que envuelve a otro objeto y permite interceptar y personalizar operaciones como la lectura y escritura de propiedades.
    console.log($state.snapshot(objeto)); 
    
}}>
    Log Snapshot
</button> -->

<!-- 4. Bucle de Notificaciones -->
<!-- <h1>Notificaciones</h1> -->
<!-- <ul> -->
    
     <!-- {#each notificaciones as {title, body, date}, index} -->
    <!-- {#each notificaciones as notificacion, index (notificacion.id)} -->
    <!-- {#each notificaciones as notificacion, index (notificacion.id)} -->
        <!-- {@const dateObject = new Date(date)} -->
        <!-- <Notification 
            { notificacion } 
            { index }
            onremove= {(id) => {
                // alert(`Removiendo notificación en el índice ${id}`);
                // notificaciones.splice(index, 1);
                notificaciones = notificaciones.filter(n => n.id !== id);
            }
        } />
        {:else}
        <p>No hay notificaciones</p>
    {/each}
</ul> -->

<!-- 5. Componentes de la hoja de cálculo: inicialización y ayuda -->
 <Sheet {data} />

 <pre>
    {JSON.stringify(data, null, 2) // data: la variable que contiene los datos de la hoja de cálculo
                                // null: indica que no se debe aplicar ninguna función de reemplazo a los valores
                                // 2: especifica el número de espacios para la indentación en la representación JSON
    }
 </pre>

<style>
    :global {
        body {
            background-color: #222;
            color: #eee;
        }
    }
</style>