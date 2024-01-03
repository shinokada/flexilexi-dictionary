<script>
  import dictionary from '$lib/data/norsk-dic.json';
  import {FlexiLexi} from "$lib";
  const keys = ['norsk', 'english']
  // let fields = ['norsk', 'english']
  const title = 'Norsk ordbok'
  const subTitle = "You can search Norwegian and Englsih."
</script>

<FlexiLexi {dictionary} {keys} {subTitle} {title} />
