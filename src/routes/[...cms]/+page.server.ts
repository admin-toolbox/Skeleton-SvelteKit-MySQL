import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (({ locals }) => {

    if (!locals.cms) {
        throw error(404, {
            message: 'Not found'
        });
    }

    return {
        cms: locals?.cms
    };
}) satisfies PageServerLoad;