import { error, json, text } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({fetch, cookies}) => {
    console.log(cookies.getAll());
    
    const postsRes = await fetch('https://dummyjson.com/posts'); // La data se obtiene de una API externa.
    const postsData = await postsRes.json(); // La data se parsea a JSON para que se pueda manipular, ya que antes viene en formato string.

    return json(postsData, { // Con JSON.stringify se convierte la data a string para enviarla en la respuesta.
        status: postsRes.status
    });

    // return new Response(JSON.stringify({message: 'Error'}), {
    //     status: 401
    // });

    // return error(401, 'Error')
}

export const  POST: RequestHandler = async ({request, fetch}) => {
    const post = await request.json(); // Me retorna javaScript Object.
    
    if(!post.title) {
        return error(400, 'El título es obligatorio!');
    }
    
    // Insertar post a la base de datos (simulado aquí
    //  con una API externa).
    return json({id: crypto.randomUUID(), title: post.title}, {
        status: 201
    })
}

export const fallback: RequestHandler = ({request}) => {
    return text(`${request.method} recibido en /api/posts`);
}