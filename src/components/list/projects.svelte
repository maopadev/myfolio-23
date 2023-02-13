
<!-- Component - List of Projects -->
<ul class="block z-0 w-screen min-h-screen gap-8 overflow-y-clip justify-center items-end align-middle px-12">
    {#each projects as project }
        <li id="" class="flex w-full h-auto leading-tight justify-end items-center text-7xl">
            <a href="" class="flex flex-wrap font-tusker uppercase opacity-100 text-right justify-center items-center outline-font 
                transition-all ease-in-out duration-300">
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
    font-size: 8.5rem;
}

.outline-font {
    color: transparent !important;
	-webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #37454D;
}

.outline-font:hover {
    color: #009170 !important;
    -webkit-text-stroke-width: 0px;
    -webkit-text-stroke-color: transparent !important;
}

</style>