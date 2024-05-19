import { getGuilds } from '$lib/server/discord';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const guilds = await getGuilds(locals.session?.provider_token as string)

    if(!guilds) return locals.supabase.auth.signOut()

    console.log(guilds)

    return { guilds };
}) satisfies PageServerLoad;