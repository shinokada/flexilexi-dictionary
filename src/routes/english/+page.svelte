<script>
	import dictionary from '$lib/data/eng-dictionary.json';
	import {FlexiLexi} from "flexilexi";
</script>


	<h1 class="mb-8 text-4xl">English dictionary</h1>
	<p>Find relevant results even with partially matched queries.</p>
	<FlexiLexi {dictionary} />