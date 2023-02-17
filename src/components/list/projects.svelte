
<!-- Component - List of Projects -->
<ul class="flex flex-col w-full h-full gap-8 overflow-y-clip justify-center items-end align-middle px-12 z-20">
    {#each projects as project }
        <li id="" class="flex w-full h-auto leading-tight justify-end items-center text-7xl">
            <a href={project.links.github} class="flex flex-wrap font-neueBitPro uppercase opacity-100 text-right justify-center items-center size-title outline-font 
                transition-all ease-in-out duration-500">
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
		name: ['myFOLIO 23↗'],
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl et nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget ultricies nisl nisl et nisl.',
		technologies: ['ASTRO', 'SVELTE', 'JS'],
		links: {
			github: 'https://github.com/mrtgdev/svelte-portfolio',
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

.size-title {
	font-size: 10vh;
	line-height: 0.75;
}

.outline-font {
    color: transparent !important;
	-webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #37454D;
}

.outline-font:hover {
    color: #FFFE54 !important;
    -webkit-text-stroke-width: 0px;
    -webkit-text-stroke-color: transparent !important;
}

</style>