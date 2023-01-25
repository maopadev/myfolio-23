
<!-- Desktop Navigation Bar -->
<div id="corner-left" class="flex items-center justify-center min-w-screen h-auto gap-24 z-50">
    <div class="flex flex-col items-start justify-center gap-1">
        <a id="home-link" href="/" class="flex-col flex justify-center items-center">
            <img src={ logo } alt="" class="text-xs gap-4 w-20 h-20 text-ocean-green dark:text-bigstone"/>
        </a>
        <div id="" class="flex flex-row justify-center items-center pt-4 gap-x-12">
            <div class="flex flex-col justify-end items-start gap-y-1">
                <h1 class="font-bold text-3xl">
                    Full Stack Developer
                </h1>
                
                <p class="">
                    My Portfolio
                    <color class="text- font-medium">20{ getCurrentYear() } ↗</color>
                </p>
            </div>
            <div class="flex flex-col justify-end items-start gap-y-1">
                <div class="hidden xl:inline-flex gap-x-4 text-gray-900 dark:text-gray-400 dark:text-opacity-90"> 
                    <h1 class="dark:text-gray-300 font-bold">Location</h1>
                    {coordinates}
                </div>
                <button id="" class="transition ease-in-out delay-150 hover:text-ocean-fluro hover:translate-x-1 duration-300">
                    mrtg.dev@outlook.com
                </button>
            </div>
        </div>
    </div>
</div>
<div id="corner-right" class="hidden xl:inline-flex h-12 w-auto gap-8 align-middle items-center ">
    <ul class="flex flex-col justify-between items-end">
        <li>
            <a href="/about">
                About
            </a>
        </li>
        <li>
            <a href="/journal">
                Journal
            </a>
        </li>
        <li>
            <a href="/contact">
                Contact
            </a>
        </li>   
    </ul>
    <DarkMode class="dark:text-cultured hover:bg-transparent focus:bg-transparent" />
</div>

<script lang="js">

import { DarkMode } from 'flowbite-svelte'
import { getCurrentYear } from '@scripts/date'

// > Assets Import
import github from '@images/github.svg'
import logo from '@images/favicon.webp'

let coordinates = `40° 27' 2.232''\nN 3° 41' 29.4'' W`

</script>
