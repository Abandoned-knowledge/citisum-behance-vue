<script setup lang="ts">
import { imageLinks, aboutBenefits } from "@/data/about";
</script>

<template>
  <div class="h-screen bg-dark m-comp">
    <section class="container mx-auto flex h-full items-center gap-20">
      <div class="images grid w-[50%]">
        <img v-for="item in imageLinks" :src="item.link" alt="" :class="`images__item images__item_${item.count}`" />
        <div class="flex flex-col items-center justify-center gap-4 p-5 text-accent">
          <h1 class="h1-text">23+</h1>
          <p class="title-text">Over Experience</p>
        </div>
      </div>

      <div class="flex w-[50%] flex-col gap-10">
        <p class="body-text body-text_uppercase text-light">dream house our process</p>
        <h2 class="h2-text text-light">our work process make your dream home</h2>
        <div class="flex w-[80%] flex-col gap-7">
          <article v-for="benefit in aboutBenefits" class="flex gap-5">
            <component :is="benefit.icon" class="icon row-span-2 h-16 w-16" />
            <div class="flex flex-col gap-2">
              <p class="title-text text-light">{{ benefit.title }}</p>
              <p class="body-text text-light">{{ benefit.content }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  @apply fill-none stroke-accent stroke-1;
  &_selected {
    @apply fill-accent stroke-light;
  }
}

.images {
  @apply grid h-[70%] grid-cols-2 gap-6;
  &__item {
    @apply h-full w-full rounded-[15px] object-cover;
    &_2 {
      grid-row: span 2;
    }
    &_3 {
      grid-row: span 2;
    }
  }
}
</style>
