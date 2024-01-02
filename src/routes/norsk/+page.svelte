<script>
  import dictionary from '$lib/data/norsk-dic.json';
  import {FlexiLexi} from "$lib";
  let keys = ['norsk', 'english']
  let title = 'Norsk ordbok'
  // dictionary, keys, title
</script>

<FlexiLexi {dictionary} {keys} {title} />
