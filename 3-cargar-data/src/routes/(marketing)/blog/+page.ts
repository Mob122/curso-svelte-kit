import type { PageLoad } from './$types';

export const load = (async ({data}) => {
    const modulo = data.postType === 1 ? await import('./Post-1.svelte') : await import('./Post-2.svelte');

    return {
        ...data,
        x: 1,
        component: modulo.default
    };
}) satisfies PageLoad;