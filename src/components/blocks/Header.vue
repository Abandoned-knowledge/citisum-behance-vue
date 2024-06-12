<script setup lang="ts">
import Button from "@/components/shared/Button.vue";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import HamburgerMenu from "@/components/shared/HamburgerMenu.vue";
import menuItems from "@/data/header";
</script>

<template>
  <header class="container relative mx-auto box-border">
    <div class="absolute flex w-full items-center justify-between pt-5">
      <a href="#" class="flex items-center gap-4">
        <LogoIcon class="text-dark" />
        <span class="text-4xl font-medium">Citisum</span>
      </a>

      <nav class="hidden lg:block">
        <ul class="flex gap-16">
          <li v-for="item in menuItems" class="link">
            <a class="body-text" :href="item.link">{{ item.title }}</a>
          </li>
        </ul>
      </nav>

      <Button class="hidden lg:block"> Contact Us </Button>

      <HamburgerMenu :items="menuItems" />
    </div>
  </header>
</template>
