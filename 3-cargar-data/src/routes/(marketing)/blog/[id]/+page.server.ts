import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Post, PostComment } from '$lib/types';

export const load = (async ({params}) => {
    // console.log(params.id);

    async function fetchPost() {
        console.log('Fetch iniciado');
        const postRes = await fetch(`https://dummyjson.com/posts/${params.id}`);
        if (postRes.status !== 200) {
            error(postRes.status, 'Post no encontrado');
        }

        const postResJSON: Post = await postRes.json();

        console.log('Fetch finalizado');

        return postResJSON;        
    }

    async function fetchComments() {
        console.log('Cargando comentarios...');
        const postCommentsRes = await fetch(`https://dummyjson.com/posts/${params.id}/comments`);

        const commentsResJSON: PostComment[] = postCommentsRes.ok ? (await postCommentsRes.json()).comments : [];

        console.log('Comentarios cargados');
        return commentsResJSON;
    };

    // Ejecución den Paralelo para optimizar tiempos de carga.
    // const [post, comments] = await Promise.all([fetchPost(), fetchComments()]);

    const commentsPromise = fetchComments();
    const post = await fetchPost();

    return {
        comments: fetchComments(),
        post: await fetchPost(),
        title: post.title,
        description: post.body.slice(0, 200)
    };
}) satisfies PageServerLoad;