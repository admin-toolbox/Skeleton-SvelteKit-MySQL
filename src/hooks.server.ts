import type { Handle, } from '@sveltejs/kit'
import { db } from '$lib/database'
import { sequence } from '@sveltejs/kit/hooks'

// All requests will query for a matching path in the CMS table and make it available in the global `locals` object.
async function findCMSContent({ event, resolve }) {
    const cmsContent = await db.content.findUnique({
        where: { virtualPath: event.url.pathname }
    })

    if (cmsContent) {
        event.locals.cms = cmsContent;
    }
    return await resolve(event);
}


//async function userSession({ event, resolve }) {
// // get cookies from browser
// const session = event.cookies.get('session')

// if (!session) {
//     // if there is no session load page as normal
//     return await resolve(event)
// }

// // find the user based on the session
// const user = await db.user.findUnique({
//     where: { userAuthToken: session },
//     select: { username: true, role: true },
// })

// // if `user` exists set `events.local`
// if (user) {
//     event.locals.user = {
//         name: user.username,
//         role: user.role.name,
//     }
// }

// load page as normal
//    return await resolve(event)
//}


// export const handle: Handle = sequence(userSession, findCMSContent);
export const handle: Handle = sequence(findCMSContent); // If using userSession function, uncomment previous line and remove this line.
