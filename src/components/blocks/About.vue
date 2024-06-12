<script setup lang="ts">
import { imageLinks, aboutBenefits } from "@/data/about";
</script>

<template>
  <div id="about" class="m-comp flex min-h-screen items-center justify-center bg-dark">
    <section class="container mx-auto flex h-full flex-col items-center justify-center gap-20 py-10 md:flex-row">
      <div class="images grid w-[96%] md:w-[50%]">
        <img v-for="item in imageLinks" :src="item.link" alt="" :class="`images__item images__item_${item.count}`" />
        <div class="hidden flex-col items-center justify-center gap-4 p-5 text-accent md:flex">
          <h1 class="h1-text">23+</h1>
          <p class="title-text">Over Experience</p>
        </div>
      </div>

      <div class="-order-1 md:order-1 flex w-[96%] flex-col items-center gap-5 md:w-[50%] md:items-start md:gap-10">
        <p class="body-text body-text_uppercase text-light">dream house our process</p>
        <h2 class="h2-text text-center text-light md:text-start">our work process make your dream home</h2>
        <div class="flex w-[80%] flex-col gap-7">
          <article v-for="benefit in aboutBenefits" class="flex gap-5">
            <component :is="benefit.icon" class="icon row-span-2 h-12 w-12 md:h-16 md:w-16" />
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
  @apply grid grid-cols-3 gap-6 md:h-[70%] md:grid-cols-2;
  @media screen and (max-width: 500px) {
    @apply grid-cols-2;
  }
  &__item {
    @apply h-full w-full rounded-[15px] object-cover;
    &_2 {
      @apply md:row-span-2;
    }
    &_3 {
      @apply md:row-span-2;
      @media screen and (max-width: 500px) {
        @apply col-span-2;
      }
    }
  }
}
</style>
