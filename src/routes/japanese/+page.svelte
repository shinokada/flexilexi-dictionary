<script>
	import dictionary from '$lib/data/norsk-dic.json';
  import {FlexiLexi} from "$lib";
  let keys = ['japanese', 'romaji', 'english']
  let title = 'Japanese dictionary'
</script>

<FlexiLexi {dictionary} {keys} {title} />
