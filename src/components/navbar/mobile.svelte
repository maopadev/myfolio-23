
<!-- Mobile Navigation Bar -->
<div id="corner-left" class="flex items-center justify-center w-auto h-12 gap-24 z-50">
    <div class="flex items-center justify-center h-12 lg:h-16 gap-4">
        <a class="w-12 h-12" href='/'>
            <img src={ logo } alt="" class="text-xs text-cultured dark:text-bigstone"/>
        </a>
    </div>
</div>
<div id="corner-right" class="hidden xl:inline-flex h-12 w-auto gap-8 align-middle items-center ">
    <DarkMode class="" />
</div>

<script lang="js">

import logo from '@images/favicon.webp'
import { DarkMode } from 'flowbite-svelte'

</script>