<!-- Navigation Component -->
<header class="fixed w-full flex top-0 justify-between items-center px-12 p-4 z-20 border-b-2 border-bigstone bg-transparent backdrop-blur-lg backdrop-filter">
	<div id="corner" class="flex items-center justify-center w-16 h-auto">
		<a href='/'>
			<img src={logo} alt="@mrtgdev" />
		</a>
	</div>
	<!-- Information Web -->
	<div id="corner" class="inline-flex h-12 w-auto gap-8 align-middle items-center">
		<a class="flex items-center justify-center w-8 h-auto" 
			href="https://github.com/mrtgdev/my-portfolio">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<script lang="js">

import logo from '@images/favicon.webp'
import github from '@images/github.svg'

// Style SCSS
import '@styles/navigation.scss'

</script>