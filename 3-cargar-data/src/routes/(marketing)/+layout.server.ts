import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    return {
        marketingLayoutDate: 'Some data'
    };
}) satisfies LayoutServerLoad;