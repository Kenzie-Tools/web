import type { APIGuild } from "discord-api-types/v10"

export async function getGuilds(token: string) {
    const response = await fetch('https://discord.com/api/v10/users/@me/guilds', {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    if(response.ok) {
        let json = await response.json() as APIGuild[]
        const guilds = json.map((guild) => {
            if(!checkPermissions(5, guild.permissions as string)) return null;
            return {
                id: guild.id,
                name: guild.name,
                image: guild.icon ? imageUrl(guild.id, guild.icon) : '/discord.jpeg'
            }
        }).filter((guild) => guild !== null) as { id: string, name: string, image: string }[]
        return guilds
    }
    return null
}

export async function getGuild(token: string, id: string) {
    const response = await fetch(`https://discord.com/api/v10/guilds/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    if(response.ok) {
        return response.json()
    }
    return null
}

export function checkPermissions(permission: number, permissions: string){
    const permissionBit = BigInt(1) << BigInt(permission);
    return (BigInt(permissions) & permissionBit) === permissionBit;
}

export function imageUrl(id: string, icon: string){
    return `https://cdn.discordapp.com/icons/${id}/${icon}.webp`
}