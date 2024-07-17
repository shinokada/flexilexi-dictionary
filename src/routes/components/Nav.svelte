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

	const navClass =
		'w-full divide-gray-200 border-gray-200 bg-white text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:bg-zinc-900 sm:px-4';
	const ulclass =
		'mt-0 flex flex-col py-3 lg:flex-row lg:my-0 order-1 font-medium xl:gap-4 dark:lg:bg-transparent dark:bg-zinc-900 lg:bg-white border-0';
</script>

<header
	class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-zinc-900 lg:pl-4"
>
	<Navbar
		{toggleNav}
		{closeNav}
		{navStatus}
		{navClass}
		fluid
		breakPoint="md"
		div2Class="ml-auto w-full"
	>
	{#snippet brand()}
		<NavBrand siteName="FlexiLexi dictionary" />
		<div class="flex items-center ml-auto md:order-1">
            <Darkmode class="inline-block dark:hover:text-white hover:text-gray-900" />
        </div>
	{/snippet}
	<NavUl class={ulclass}>
		<NavLi href="/">Norsk</NavLi>
		<NavLi href="/english">English</NavLi>
		<NavLi href="/japanese">Japanese</NavLi>
		<NavLi href='/about'>About</NavLi>
	</NavUl>
</Navbar>
</header>