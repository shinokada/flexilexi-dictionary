<script>
  import dictionary from '$lib/data/three-thousand-all.json';
  import { FlexiLexi } from 'flexilexi';
  let keys = ['japanese', 'romaji', 'english'];
</script>

<h1 class="mb-8 text-4xl">Japanese dictionary</h1>
<h2 class="mb-4 text-2xl text-gray-600">You can search Japanese, Romaji, and English.</h2>
<p>Find relevant results even with partially matched queries.</p>
<FlexiLexi {dictionary} {keys} />
