<script>
	import dictionary from '$lib/norsk-dic.json';
	import Fuse from 'fuse.js';

	let threshold = $state(0);

	let options = $derived({
		keys: ['norsk', 'english'],
		threshold: threshold
	});

	let fuse;
	let searchInput = $state();

	fuse = new Fuse(dictionary, options);

	let searchResults = $state([]);

	function handleSearch() {
		searchResults = fuse.search(searchInput);
		// console.log('search ', searchResults);
	}

	function thresholdChange() {
		// console.log('threshold', threshold)
		fuse = new Fuse(dictionary, options);
		if (searchInput) {
			searchResults = fuse.search(searchInput);
		}
	}
</script>

<main class="m-8">
	<h1 class="mb-8 text-3xl">Norsk ordbok: Fuzzy search</h1>

	<div class="w-full">
		<label for="minmax-range" class="mb-2 block text-lg font-medium text-gray-900 dark:text-white"
			>Fuzziness: {threshold}</label
		>
		<input
			id="minmax-range"
			onchange={thresholdChange}
			type="range"
			min="0.0"
			max="1.0"
			step="0.1"
			bind:value={threshold}
			class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 sm:w-1/3 dark:bg-gray-700"
		/>
	</div>

	<div class="mb-6">
		<label for="default-input" class="mb-2 block text-lg font-medium text-gray-900 dark:text-white"
			>You are searching: {searchInput}</label
		>
		<input
			type="text"
			bind:value={searchInput}
			oninput={handleSearch}
			placeholder="Search..."
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:w-1/3 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		/>
	</div>

	<ul class="max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
		{#each searchResults as result}
			<li>{result.item.norsk}: {result.item.english}</li>
		{/each}
	</ul>
</main>
