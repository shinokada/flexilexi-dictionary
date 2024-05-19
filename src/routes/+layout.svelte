<script>
  import "../app.pcss";
  import { Runatics } from 'runatics';
	import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import { page } from '$app/stores';
	let { children, data } = $props();
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
  let metaTags = $state(
    $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );
  $effect(() => {
    metaTags = $page.data.pageMetaTags ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags ) : data.layoutMetaTags
  });
	const analyticsId = data.ANALYTICS_ID_LANGUAGE_APP
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags}/>
<Nav />

<section class="min-h-screen">
	<div class="mx-auto max-w-screen-xl px-4 py-8 text-center">
    {@render children()}
  </div>
</section>

<Footer />