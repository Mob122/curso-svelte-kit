import type { LayoutServerLoad } from './$types';

export const load = (async ({cookies}) => {
    const token = cookies.get('token');

    return {
        user: token ? { name: 'Martin', id: 1} : null
    };
}) satisfies LayoutServerLoad;