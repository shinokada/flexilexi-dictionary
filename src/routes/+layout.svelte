<script>
  import "../app.pcss";
	let { children } = $props();
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
  // import { Navbar, Footer } from '$lib'
</script>

<Nav />

<section class="min-h-screen">
	<div class="mx-auto max-w-screen-xl px-4 py-8 text-center">
    {@render children()}
  </div>
</section>

<Footer />