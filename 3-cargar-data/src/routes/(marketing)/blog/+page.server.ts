import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { PostsResponse } from "$lib/types";
import { POSTS_POR_PAGINA } from "$lib/constants";


// 1. Entiendo el concepto de "load functions" en SvelteKit, que son funciones asíncronas que se ejecutan antes de que una página o componente se renderice. Estas funciones permiten cargar datos necesarios para la página, como datos de una API o información del servidor, y pasar esos datos al componente para su uso durante el renderizado.

// export const load = (async ({parent}) => {
//     // Antes de cargar los datos del parent tenemmos que hacer cosas que no dependan de los datos del parent para optimizar la carga.

//     console.log('Blog Universal Carga Data');


//     const parentData = await parent();
//     console.log('Parent Data:', parentData);
    
//     return {
//         title: 'Blog Page',
//         description: 'Esta es la pagina del blog',
//         count: 10
//     };
// }) satisfies PageServerLoad;

export const load = (async ({fetch, url}) => {
    const page = +(url.searchParams.get('page') || '1');

    // Llamas a la función fetch para obtener los posts desde la ruta /api/posts que es una función definida en +server.ts.
    const postsRes = await fetch(`https://dummyjson.com/posts?limit=${POSTS_POR_PAGINA}&skip=${(page - 1) * POSTS_POR_PAGINA}`); // Porque  el skip es (pagina -1) * posts_por_pagina para saltarse los posts de las paginas anteriores.
    // console.log(postsRes);

    if(!postsRes.ok) {
        error(postsRes.status, 'No se pudieron cargar los posts');
    }    
    
    
    return {
        title: 'Blog Page',
        description: 'Esta es la pagina del blog',
        posts: (await postsRes.json()) as PostsResponse,
        postType: Math.random() > 0.5 ? 1 : 2
    }
}) satisfies PageServerLoad;