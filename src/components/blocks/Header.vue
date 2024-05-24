<script setup lang="ts">
import Button from "../shared/Button.vue";
import LogoIcon from "../icons/LogoIcon.vue";
import type { menuItem } from "@/interfaces/interfaces";

const menuItems: menuItem[] = [
  {
    title: "About Us",
    link: "#",
  },
  {
    title: "Project",
    link: "#",
  },
  {
    title: "Agents",
    link: "#",
  },
  {
    title: "Services",
    link: "#",
  },
];
</script>

<template>
  <header class="container mx-auto flex items-center justify-between pt-5">
    <div class="flex items-center gap-5">
      <LogoIcon class="text-dark" />
      <span class="text-4xl font-medium">Citisum</span>
    </div>

    <nav>
      <ul class="flex gap-16">
        <li v-for="item in menuItems" class="link">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </nav>

    <Button> Contact Us </Button>
  </header>
</template>

<style lang="scss" scoped>
.link {
  @apply text-dark;
  position: relative;

  &:hover {
    &::before {
      width: 100%;
    }
  }

  &:before {
    @apply bg-dark;
    transition: all 0.3s ease;
    content: "";
    position: absolute;
    height: 1px;
    top: 100%;
    width: 0;
  }
}
</style>
