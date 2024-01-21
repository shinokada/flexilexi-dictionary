<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode } from 'svelte-5-ui-lib';
	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.isOpen;
	});

	let divClass = "ml-auto w-full"
    let ulClass =
    'flex flex-col py-3 lg:flex-row lg:my-0 text-sm order-1 font-medium gap-4 lg:gap-2 dark:lg:bg-transparent lg:bg-white border-0';
    let navClass = 'w-full divide-gray-200 border-gray-200 bg-white px-2 py-2.5 text-gray-500 dark:bg-zinc-900 dark:divide-gray-700 dark:border-gray-700 dark:text-gray-400 sm:px-4'

</script>
<header
    class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-zinc-900"
  >
  <Navbar {navClass} {toggleNav} {closeNav} {navStatus} breakPoint="md" fluid divChildrenClass={divClass}>

	{#snippet brand()}
		<NavBrand siteName="FlexiLexi dictionary" {closeNav} />
		<div class="flex items-center ml-auto md:order-1">
            <Darkmode class="inline-block dark:hover:text-white hover:text-gray-900" />
        </div>
	{/snippet}
	<NavUl {ulClass}>
		<NavLi href="/" {closeNav}>Norsk</NavLi>
		<NavLi href="/english" {closeNav}>English</NavLi>
		<NavLi href="/japanese" {closeNav}>Japanese</NavLi>
	</NavUl>
</Navbar>
</header>