<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers } from 'svelte-5-ui-lib';
	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.isOpen;
	});
</script>

<Navbar {toggleNav} {closeNav} {navStatus}>
	{#snippet brand()}
		<NavBrand siteName="FlexiLexi dictionary" {closeNav} />
	{/snippet}
	<NavUl>
		<NavLi href="/" {closeNav}>Norsk</NavLi>
		<NavLi href="/english" {closeNav}>English</NavLi>
		<NavLi href="/japanese" {closeNav}>Japanese</NavLi>
	</NavUl>
</Navbar>