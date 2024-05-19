import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
    const { supabase } = await parent()
    await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
            scopes: 'email guilds'
        }
    })
    
    return;
};