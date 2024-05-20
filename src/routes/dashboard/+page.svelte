<script lang="ts">
	import { Heading } from 'flowbite-svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;

    const guilds = data.guilds as { id: string; name: string; image: string; }[];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 m-10">
    {#each guilds as guild}
        <a class="flex flex-col items-center" href="/dashboard/{guild.id}">
            <img src={guild.image} alt={guild.name} class="h-28 w-28 rounded-full" />
            <Heading tag="h4" class="text-center">{guild.name}</Heading>
        </a>
    {/each}
</div>