<script>
	import dictionary from '$lib/data/eng-dictionary.json';
	import {FlexiLexi} from "flexilexi";
	
	const dictionaryArray = Object.keys(dictionary).map(key => ({ key }));

</script>


	<h1 class="mb-8 text-3xl">English dictionary</h1>

	<FlexiLexi {dictionary} />