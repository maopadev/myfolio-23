

<div class="inline-flex w-full h-auto justify-center md:justify-start items-center align-middle gap-2">
    {#each tools as tool}
        <a id={ tool.id } class="flex flex-wrap text-xs px-2 p-2 border-2 border-gray-700 justify-center items-center align-middle" 
                href={ tool.link }>
            { tool.name }
        </a>
    {/each}
</div> 

<script lang="js">

let tools = [
    { id: 'astro', name: 'Astro', link: '', color: '' },
    { id: 'svelte', name: 'Svelte', link: '', color: '' },
    { id: 'java', name: 'Java JSP', link: '', color: '' },
    { id: 'db', name: 'SQL Developer', link: '', color: '' }
]

</script>