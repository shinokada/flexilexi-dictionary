<script>
  import dictionary from '$lib/data/norsk-dic.json';
  import {FlexiLexi} from "flexilexi";

  const title = 'Norsk ordbok'
  const subTitle = "You can search Norwegian and Englsih."
</script>

	<h1 class="mb-8 text-4xl">Norsk ordbok</h1>
	<h2 class="mb-4 text-2xl text-gray-600" >You can search Norwegian and Englsih.</h2>
  <p>Find relevant results even with partially matched queries.</p>
  
<FlexiLexi {dictionary} />

