<script>
  import "../app.pcss";
	let { children } = $props();
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
  // import { Navbar, Footer } from '$lib'
</script>

<Nav />

<section>
  <div class="pt-8 px-4 mx-auto max-w-screen-xl text-center">
    {@render children()}
  </div>
</section>

<Footer />