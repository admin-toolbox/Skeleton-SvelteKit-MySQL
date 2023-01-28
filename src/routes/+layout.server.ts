import error from '@sveltejs/kit';

import type { LayoutServerData } from './$types';

export const load: LayoutServerData = async ({ locals }) => {

    return {
        cms: locals.cms,
    };
}