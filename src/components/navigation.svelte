
<!-- Navigation Component -->
<header class="sticky flex max-w-screen-xl pt-8 top-0 justify-between items-center m-auto p-4 z-10 
	bg-transparent border-b-4 border-b-bigstone dark:border-b-black backdrop-blur-xl">
	<!-- Information -->
	<div id="corner-left" class="flex items-center justify-center w-auto h-12 gap-24 z-50">
		<div class="flex items-center justify-center h-12 lg:h-16 gap-4">
			<a class="w-12 h-12" href='/'>
				<img src={ logo } alt="" class="text-xs text-alabaster-back dark:text-bigstone"/>
			</a>
		</div>
		<div bind:this={y} class='{y <= 43 ? 'inline-flex' : 'hidden'} lg:inline-flex gap-4
			dark:text-gray-600 dark:text-opacity-80'> 
			<h1 class=" font-bold">Location</h1>
			{coordinates}
		</div>
	</div>
	<!-- 
		Actions Buttons 
		-> Implementar un FOREACH para todas las redes sociales a mostrar
		-> Mostrar el modo oscuro
	-->
	<div id="corner-right" class="inline-flex h-12 w-auto gap-8 align-middle items-center ">
		<DarkMode class="" />
	</div>
</header>

<svelte:window bind:scrollY={y} />

<script lang="js">

// > Assets Import
import github from '@images/github.svg'
import logo from '@images/favicon.webp'
import '@styles/navigation.scss'

// > Components Import
import { DarkMode } from 'flowbite-svelte'

let coordinates = `40° 27' 2.232''\nN 3° 41' 29.4'' W`
let y = 0

</script>