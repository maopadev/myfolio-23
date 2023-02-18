
<!-- Navigation Component -->
<navigation class="fixed w-screen top-0 justify-center items-center m-auto py-4 md:py-8 lg:py-12 px-auto z-10 
		bg-transparent transition-all duration-150">
	<div class="flex max-w-screen-2xl p-1 px-12 justify-between items-center m-auto bg-transparent border-4 border-slate-900 backdrop-blur-2xl border-opacity-50">
		<div id="corner-left" class="flex items-center justify-center lg:justify-start w-2/3 h-12 gap-24 z-10">
			<div class="flex items-center justify-center align-middle gap-4 -ml-12 pl-12 pr-24 py-2 hover:bg-slate-700
				transition-all duration-300">
				<img src={ logo } width="40px" height="40px" alt="" class="text-xs text-cultured dark:text-bigstone"/>
			</div>
		</div>
		<div class="flex justify-end items-center align-middle gap-4 text-cultured font-bold text-sm">
			<button type="button" on:click={() => { console.log('click') }}
				class="flex items-center justify-center px-4 py-2 border-gray-800 border-2 transition-all duration-300 hover:translate-x-1 
					hover:-translate-y-1 hover:border-orange-600 hover:bg-orange-600">
				<h1>IC RSS</h1>
			</button>
			<button type="button" on:click={() => { console.log('click') }}
				class="flex items-center justify-center px-4 py-2 border-gray-800 border-2 transition-all duration-300 hover:translate-x-1 
					hover:-translate-y-1 hover:border-ocean-fluro hover:bg-ocean-fluro hover:text-black">
				<h1>Descargar CV</h1>
			</button>
		</div>
	</div>
</navigation>

<script lang="js">

import logo from '@images/favicon.webp'
import '@styles/navigation.scss'

</script>