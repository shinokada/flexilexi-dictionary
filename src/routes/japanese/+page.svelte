<script>
	import dictionary from '$lib/data/three-thousand-all.json';
  import {FlexiLexi} from "$lib";
  let keys = ['japanese', 'romaji', 'english']
  let title = 'Japanese dictionary'
</script>

<FlexiLexi {dictionary} {keys} {title} />
