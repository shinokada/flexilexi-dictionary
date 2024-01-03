<script>
	import dictionary from '$lib/data/three-thousand-all.json';
  import {FlexiLexi} from "$lib";
  let keys = ['japanese', 'romaji', 'english']
  // let fields = ['japanese', 'romaji', 'english']
  let title = 'Japanese dictionary'
  let subTitle = 'You can search Japanese, Romaji, and English.'
</script>

<FlexiLexi {dictionary} {keys} {subTitle} {title} />
