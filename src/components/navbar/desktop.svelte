
<!-- Desktop Navigation Bar -->
<div id="corner-left" class="flex items-center justify-center min-w-screen h-auto gap-24 z-50 transition-all ease-in-out">
    <div class="flex flex-col items-start justify-center gap-1">
        <a id="home-link" href="/" class="flex-col flex justify-center items-start p-2 bg-ocean-green w-full px-6 rounded-md duration-300">
            <img src={ logo } alt="" class="text-xs gap-4 w-16 h-16 text-ocean-green dark:text-bigstone"/>
        </a>
        <div id="" class="flex flex-row justify-center items-center align-middle pt-4 gap-x-12 duration-300">
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
                <div class="hidden xl:inline-flex gap-x-4 text-gray-900 dark:text-gray-400 dark:text-opacity-90 duration-300"> 
                    <h1 class="dark:text-gray-300 font-bold duration-150">Location</h1>
                    {coordinates}
                </div>
                <button id="email-button" class="hover:text-ocean-fluro hover:translate-x-1 duration-300">
                    mrtg.dev@outlook.com
                </button>
            </div>
        </div>
    </div>
</div>
<div id="corner-right" class="hidden xl:inline-flex h-12 w-auto gap-8 align-middle items-center ">
    <ul class="flex flex-col justify-center items-end align-middle">
        {#each pages as page }
            <li>
                <a class="inline-flex gap-x-4 justify-center items-center align-middle hover:text-ocean-fluro hover:font-bold duration-300" href={ page.href }>
                    <p id="link-{ page.name }" class="font-semibold ">{ page.name }</p>
                    <p id="id-{ page.id }">{ page.id }</p>
                </a>
            </li>
        {/each}
    </ul>
    <DarkMode class="dark:text-cultured hover:bg-transparent focus:bg-transparent duration-300" />
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
