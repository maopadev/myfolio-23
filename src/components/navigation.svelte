
<!-- Navigation Component -->
<header class="relative w-screen h-12 flex top-6 lg:top-20 justify-between items-center p-4 z-10 bg-transparent px-12 md:px-20 xl:px-24">
	<!-- Information -->
	<div id="corner-left" class="flex items-center justify-center w-auto h-12 gap-24 z-50">
		<div class="flex items-center justify-center w-12 lg:w-16 h-12 lg:h-16">
			<a href='/'>
				<img src={logo} alt="Go home" />
			</a> 
		</div>
		<div class="hidden lg:inline-flex gap-4">
			<p>My Portfolio</p>
			<p>20{ getCurrentYear() }</p>
		</div>
		<div class="hidden lg:inline-flex gap-4"> 
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
		<div class="border-2 border-slate rounded-full px-8 p-2">
			<a id="github-button" class="flex items-center justify-center w-8 h-auto" 
				href="https://github.com/mrtgdev/my-portfolio">
				<img src={github} alt="GitHub" />
			</a>
		</div>
	</div>
</header>

<script lang="js">

import github from '@images/github.svg'
import logo from '@images/favicon.webp'

// > Components Import
import { DarkMode } from 'flowbite-svelte'

// Style SCSS
import '@styles/navigation.scss'

let coordinates = `40° 27' 2.232''\nN 3° 41' 29.4'' W`

const getCurrentYear = (() => {
    let currentTime = new Date()
    return currentTime.getFullYear().toString().slice(-2)
})

const getCurrentMonthDay = (() => {
    let currentTime = new Date()
    return `${currentTime.toLocaleString('default', { month: 'long' }).toString()} 
		${currentTime.getFullYear().toString()}`
})

</script>