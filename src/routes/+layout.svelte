<script lang="ts">
  import '../app.css';
  import type { Component } from "svelte";
  import { Runatics } from 'runatics';
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import { page } from '$app/state';
  let { children, data } = $props();
  import Nav from './components/Nav.svelte';
  import {Footer, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';

  type LiType = {
    name: string;
    href: string;
    Icon?: Component;
  };

  let metaTags = $state(
    page.data.pageMetaTags
      ? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
      : data.layoutMetaTags
  );
  $effect(() => {
    metaTags = page.data.pageMetaTags
      ? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
      : data.layoutMetaTags;
  });
  const analyticsId = data.ANALYTICS_ID_LANGUAGE_APP;
  const brand = {
    name: "Flexilexi",
    href: "https://flexilexi-dictionary.codewithshin.com"
  };
  const lis: LiType[] = [
    { name: 'Guide', href: '/guide/github-version' },
    { name: 'Quickstart', href: '/guide/quickstart' }
  ];
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />
<Nav />

<section class="min-h-screen mt-8">
  <div class="mx-auto max-w-screen-xl px-4 py-8 text-center">
    {@render children()}
  </div>
</section>

<Footer footerType="logo" class="dark:bg-zinc-950">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="https://flexilexi-dictionary.codewithshin.com" name="Flexilexi dictionary" />
    <FooterLinkGroup class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <FooterLink href="/">Norsk</FooterLink>
      <FooterLink href="/english">English</FooterLink>
      <FooterLink href="/japanese">Japanese</FooterLink>
      <FooterLink href="/about">about</FooterLink>
    </FooterLinkGroup>
  </div>
</Footer>