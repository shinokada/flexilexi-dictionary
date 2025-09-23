<script>
  import { Navbar, NavLi, NavBrand, NavHamburger, NavUl, DarkMode, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { page } from '$app/state';
  import {
    DotsHorizontalOutline,
    GithubSolid,
    XSolid,
    Bluesky
  } from "runes-webkit";

  let activeUrl = $state(page.url.pathname);
  $effect(() => {
    activeUrl = page.url.pathname;
  });

  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
  const twitterUrl = "https://twitter.com/shinokada";
  const blueskyUrl = "https://bsky.app/profile/codewithshin.com";

  let activeClass = "p-2 text-sm lg:text-base";
  let nonActiveClass = "p-2 text-sm lg:text-base";
</script>

<Navbar
	breakpoint="lg"
	fluid
	class="fixed top-0 left-0 z-50 border-b border-gray-100 bg-white  sm:px-12 dark:border-gray-700 dark:bg-stone-950"
	navContainerClass="lg:justify-between"
>
	<NavBrand href="/">
		<span class="text-primary-900 dark:text-primary-500 self-center text-2xl font-semibold whitespace-nowrap lg:text-3xl"
			>Flexilexi Dictionary</span
		>
	</NavBrand>
	<div class="flex justify-end lg:order-2">
		<NavHamburger class="order-3" />
		<DotsHorizontalOutline class="mt-1.5 mr-4 ml-6 dark:text-white" size="lg" />
		<Dropdown simple class="p-1">
			{#if blueskyUrl}
				<DropdownItem href={blueskyUrl} target="_blank" class="m-0 p-0.5">
					<Bluesky size="30" />
				</DropdownItem>
			{/if}
			{#if twitterUrl}
				<DropdownItem href={twitterUrl} target="_blank" class="m-0 p-2"><XSolid /></DropdownItem>
			{/if}
			{#if githubUrl}
				<DropdownItem href={githubUrl} target="_blank" class="m-0 p-2">
					<GithubSolid />
				</DropdownItem>
			{/if}
		</Dropdown>
		<DarkMode class="m-0 p-2" />
	</div>
	<NavUl
		breakpoint="lg"
		{activeUrl}
		class="order-2 lg:order-1"
		classes={{ active: activeClass, nonActive: nonActiveClass, ul: 'p-0' }}
	>
		<NavLi href="/">Norsk</NavLi>
    <NavLi href="/english">English</NavLi>
    <NavLi href="/japanese">Japanese</NavLi>
    <NavLi href="/about">About</NavLi>
	</NavUl>
</Navbar>
