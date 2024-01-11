<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers } from 'svelte-5-ui-lib';

	let nav = uiHelpers();

	let navStatus = $state();
	let toggleNav = nav.toggleNav;
	let closeNav = nav.closeNav;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.navStatus;
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
