<script setup lang="ts">
import Button from "@/components/shared/Button.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import type { menuItem } from "@/interfaces/interfaces";
import HamburgerMenu from "@/components/shared/HamburgerMenu.vue";

const menuItems: menuItem[] = [
  { title: "About Us", link: "#" },
  { title: "Project", link: "#" },
  { title: "Agents", link: "#" },
  { title: "Services", link: "#" },
];
</script>

<template>
  <header class="container mx-auto flex items-center justify-between pt-5 relative">
    <a href="#" class="flex items-center gap-4">
      <LogoIcon class="text-dark" />
      <span class="text-4xl font-medium">Citisum</span>
    </a>

    <nav class="hidden lg:block">
      <ul class="flex gap-16">
        <li v-for="item in menuItems" class="link">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </nav>

    <Button class="hidden lg:block"> Contact Us </Button>

    <HamburgerMenu :items="menuItems"/>
  </header>
</template>
