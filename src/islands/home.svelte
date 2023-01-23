
<!-- Home Islands -->
<section id="home" class="flex flex-col max-w-screen-xl h-full justify-center items-center mx-auto z-10 bg-transparent gap-24">
    <div id="image" class="relative flex -top-16 w-72 h-72 bg-green-400 z-20">
    </div>
    <div id="titule" class="flex-col absolute block top-32 max-w-screen-2xl mx-auto text-9xl font-tusker z-0
         text-alabaster-back dark:text-bigstone">
        <h1 class="relative text-left -left-4 opacity-40">My</h1>
        <h1 class="relative text-center opacity-40">Portfolio 20</h1>
        <h1 class="relative text-right -right-4 opacity-40">{ getCurrentYear() }</h1>
    </div>
    <div id="text" class="relative flex flex-col -top-20 justify-between items-center gap-4">
        <p id="salute" class="flex w-full text-xl text-start uppercase font-semibold
            dark:text-alabaster-back">
            Hello There!
        </p>
        <h1 id="name" class="flex flex-col uppercase text-8xl font-tusker text-start dark:text-papaya">
            <color class="text-ocean-green">Mario Ortega</color>al habla!
        </h1>
        <h1 id="job" class="flex flex-row flex-wrap tracking-zero lg:text-2xl dark:text-alabaster-back">
            <strong>Full Stack Developer</strong>
            &nbsp; especializado en Java EE y Servicios REST API.
        </h1>
    </div>
    <div id="hard-skills" class="relative bottom-12 md:right-10 xl:right-96 flex flex-row gap-6 justify-between items-center
        dark:text-alabaster-back pointer-events-none dark:{{in:fade}} dark:{{out:fade}}">
        <h1 class="font-bold">Hard Skills</h1> →
        {#each hardSkills as skill }
            <span id={ skill.id } class="text-base text-center border-2 {skill.border} py-1 px-4 rounded-full">
                { skill.name }
            </span>
        {/each}
    </div>
</section>

<script lang="js">

import { fade } from 'svelte/transition'

// > Scripts Import
import { getCurrentYear } from '@scripts/currentDate.js'

let hardSkills = [
    { id: 'java', name: 'Java EE', exp: '3 years', border: 'border-yellow-700', color: ''},
    { id: 'svelte', name: 'Svelte', exp: '2 years', border: 'border-papaya', color: '' },
    { id: 'db', name: 'Consultas SQL', exp: '', border: 'border-slate-back', color: '' }
]

</script>