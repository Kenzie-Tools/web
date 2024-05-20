import { getGuilds } from '$lib/server/discord';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const guilds = await getGuilds(locals.session?.provider_token as string);

    if(!guilds) return locals.supabase.auth.signOut()

    let guildsBack: { id: string, name: string, image: string, inServ: boolean }[] = [];
    const guildsNotInServ: { id: string, name: string, image: string, inServ: false }[] = [];

    guilds.forEach(async (guild) => {
        const res = await fetch(`https://api.kenzie.wtf/check-guild/${guild.id}`)
        if(!res.ok) return guildsNotInServ.push({ ...guild, inServ: false })
        guildsBack.push({ ...guild, inServ: true })
    })

    guildsBack = [...guildsBack, ...guildsNotInServ]

    return { guilds: guilds as { id: string, name: string, image: string }[] };
}) satisfies PageServerLoad;