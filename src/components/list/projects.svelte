
<!-- Component - List of Projects -->
<ul class="block z-0 w-screen min-h-screen gap-8 overflow-y-auto justify-center items-end align-middle px-12">
    {#each projects as project }
        <li id="" class="flex w-screen h-auto leading-tight">
            <a href="" class="flex flex-wrap font-tusker uppercase opacity-100 text-right justify-center items-center">
                <h1 class="flex w-full text-right">
                    {#if project.name.length == 2}
                        { project.name[0] }
                        <br>
                        { project.name[1] }
                    {:else}
                        { project.name }
                    {/if}
                </h1>
            </a>
        </li>
    {/each}
</ul>

<script lang="js">

let projects = [
	{
		name: ['My', 'Portfolio'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl et nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl et nisl.',
		technologies: ['ASTRO', 'SVELTE', 'JS'],
		links: {
			github: '',
			vercel: '',
		}
	},
    {
        name: ['YES/NO', 'Game'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl et nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl et nisl.',
        technologies: ['VUE', 'SCSS', 'JS'],
        links: {
            github: '',
            vercel: '',
        }
    },
    {
        name: 'BurnFit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl et nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl et nisl.',
        technologies: ['HTML', 'CSS', 'JS'],
        links: {
            github: '',
            vercel: '',
        }
    },
    {
        name: 'BattleShip',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl et nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl et nisl.',
        technologies: ['HTML', 'CSS', 'JS'],
        links: {
            github: '',
            vercel: '',
        }
    }
]

</script>

<style lang="scss">

li > a {
    font-size: 11.5rem;
}

</style>