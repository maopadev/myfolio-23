
<!-- Home Islands -->
<section id="home" class="flex w-full min-h-screen justify-between items-center z-10 px-12 md:px-20 xl:px-24">
    <div id="container" class="flex w-full h-full items-center justify-center py-24">
        <div class="absolute left-24 flex flex-wrap w-1/4 h-4/5 bg-red-600 rounded z-0">
            <div>
                <h1>
                    20{ getCurrentYear() }
                </h1>
                <p></p>
            </div>
            <h1>
                Portfolio
            </h1>
        </div>
        <div class="absolute flex max-w-lg h-4/5 bg-papaya">
            Image parecida a Notion
        </div>
        <div id="right" class="absolute right-24 flex w-1/3 h-4/5 z-0">
            <h1>A Developer who catch your eyes</h1>
        </div>
    </div>
    <!-- Cosos que sé -->
    <div class="absolute w-full bottom-10 right-24 gap-6">
        <p>Java EE</p>
        <p>React</p>
        <p>Svelte</p>
    </div>
</section>

<script lang="js">

import { getCurrentYear } from '@scripts/currentDate.js'

</script>