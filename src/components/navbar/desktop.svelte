
<!-- Desktop Navigation Bar -->
<div id="corner-left" class="flex items-center justify-center min-w-screen h-auto gap-24 z-50 transition-all ease-in-out pointer-events-none">
    <div class="flex flex-col items-start justify-center gap-1">
        <a id="home-link" href="/" class="flex-col flex justify-center items-start p-2 bg-transparent w-full border-4 border-cultured px-6 
            rounded-md duration-300 backdrop-blur-lg pointer-events-auto">
            <img src={ logo } alt="" class="text-xs gap-4 w-16 h-16 text-bigstone"/>
        </a>
        <div id="" class="flex flex-row justify-center items-center align-middle pt-4 gap-x-12 duration-300 text-cultured">
            <div class="flex flex-col justify-end items-start gap-y-1">
                <h1 class="font-bold text-3xl">
                    Full Stack Developer
                </h1>
                
                <p class="">
                    My Portfolio
                    <color class="text- font-medium">
                        20{ getCurrentYear() }
                        <i class="" />
                    </color>
                </p>
            </div>
            <div class="flex flex-col justify-end items-start align-middle pt-1 gap-y-1">
                <div class="hidden xl:inline-flex gap-x-4 text-gray-400 dark:text-opacity-90 duration-300"> 
                    <h1 class="text-cultured font-bold duration-150">Location</h1>
                    {coordinates}
                </div>
                <button id="email-button" class="hover:text-ocean-fluro hover:translate-x-1 duration-300 pointer-events-auto">
                    mrtg.dev@outlook.com
                </button>
            </div>
        </div>
    </div>
</div>
<div id="corner-right" class="hidden xl:inline-flex h-12 w-auto gap-8 align-middle items-center z-20">
    <ul class="flex flex-col justify-center items-end align-middle text-cultured">
        {#each pages as page }
            <li>
                <a class="inline-flex gap-x-4 justify-center items-center align-middle hover:font-bold hover:text-ocean-fluro duration-300 pointer-events-auto" href={ page.href }>
                    <p id="link-{ page.name }" class="font-semibold">{ page.name }</p>
                    <p id="id-{ page.id }" class=" text-gray-400">{ page.id }</p>
                </a>
            </li>
        {/each}
    </ul>
</div>

<script lang="js">

import { DarkMode } from 'flowbite-svelte'
import { getCurrentYear } from '@scripts/date'

// > Assets Import
import github from '@images/github.svg'
import logo from '@images/favicon.webp'

let coordinates = `40° 27' 2.232''\nN 3° 41' 29.4'' W`

let pages = [
    { id: '01', name: 'About', href: '/about' },
    { id: '02', name: 'Journal', href: '/journal' },
    { id: '03', name: 'Contact', href: '/contact' }
]

</script>
