<script>
    import { Heading } from 'flowbite-svelte';
	import { quintOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';

    const games = ["SCP: Secret Laboratory", "test"]
    let shownGame = games[0]
    let lastShownGame = shownGame
    let key = 0;

    function changeGame() {
        const index = Math.floor(Math.random() * games.length);
        if (games[index] === lastShownGame) {
            changeGame()
            return
        }
        shownGame = games[index]
        lastShownGame = shownGame
        key++;
    }

    // setInterval(changeGame, 3000)

    // for when new games get added, the transition is: transition:fly={{y: 500, duration: 1000, delay: 500}}
</script>

<div class="h-screen flex items-center justify-center">
    <div>
        <Heading class="text-primary-4 whitespace-pre-wrap text-center xl:text-7xl">
            <div class="relative h-[1.2em] w-full overflow-hidden">
                {#key key}
                    <span class="text-primary-5 absolute inline-block text-center w-full left-0 right-0"
                >{shownGame}</span>
                {/key}
            </div>to Discord? Kenzie has you covered
        </Heading>
    </div>
</div>