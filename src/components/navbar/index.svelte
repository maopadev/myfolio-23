
<!-- Navigation Component -->
<header id="mobile" class="sticky flex xl:hidden max-w-screen-xl pt-8 top-0 justify-between items-center m-auto p-4 px-12 z-10 
	bg-transparent border-b-4 border-b-bigstone dark:border-b-black backdrop-blur-xl">
	<Mobile />
</header>

<!-- 
	Desktop Version
-->
<header id="desktop" class="absolute hidden xl:flex w-screen h-screen bottom-24 left-0 bg-transparent overflow-hidden px-28 justify-between items-end p-4
	z-20 text-bigstone dark:text-cultured">
	<Desktop />
</header>

<script lang="js">

import Mobile from './mobile.svelte'
import Desktop from './desktop.svelte'

import '@styles/navigation.scss'

</script> 