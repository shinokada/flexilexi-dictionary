<script>
	import dictionary from '$lib/data/EDMTDictionary.json';
	import {FlexiLexi} from "$lib";
  let keys = ['word', 'description']
  let title = 'English dictionary'
</script>

<FlexiLexi {dictionary} {keys} {title} />
