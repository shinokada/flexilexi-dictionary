<script>
	import dictionary from '$lib/norsk-dic.json';
	import Fuse from 'fuse.js';

  let threshold = $state(0)

	let options = $derived({
		keys: ['norsk', 'english'],
		threshold:threshold
	});

	let fuse;
	let searchInput = $state();
  
  fuse = new Fuse(dictionary, options);
 
	let searchResults = $state([])

	function handleSearch() {
		searchResults = fuse.search(searchInput);
		console.log('search ', searchResults);
	}

	// const myresult = fuse.search('metanol')
</script>

<main class="m-8">
  <h1 class="text-3xl mb-8">Norsk ordbok: Fuzzy search</h1>

<div class="mb-6">
    <label for="default-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">You are searching: {searchInput}</label>
    <input type="text" bind:value={searchInput} oninput={handleSearch} placeholder="Search..." class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
	
	<ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    
		{#each searchResults as result}
			<li>{result.item.norsk}: {result.item.english}</li>
		{/each}
	</ul>
</main>
