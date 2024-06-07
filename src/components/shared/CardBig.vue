<script setup lang="ts">
import { type cardBigStorage } from "@/interfaces/interfaces";
import LocationIcon from "@/components/icons/cards/LocationIcon.vue";
import BedroomIcon from "@/components/icons/cards/BedroomIcon.vue";
import BathroomIcon from "@/components/icons/cards/BathroomIcon.vue";
import SizeIcon from "@/components/icons/cards/SizeIcon.vue";
import MoreIcon from "@/components/icons/cards/MoreIcon.vue";

const props = defineProps<cardBigStorage>();
</script>

<template>
  <article class="card">
    <header class="relative flex flex-col gap-5 overflow-hidden">
      <div class="card-bg-gradient flex aspect-[1/.7] w-full items-center justify-center rounded-xl">
        <img :src="props.img" alt="alt" class="h-full w-auto" />
      </div>
      <div class="flex items-center justify-between text-grey">
        <p class="title-text">{{ props.title }}</p>
        <MoreIcon />
      </div>

      <div class="absolute right-[-50px] top-[25px] flex rotate-45 items-center justify-center bg-white px-16 py-1">
        <p class="body-text text-dark">Featured</p>
      </div>
    </header>

    <main class="flex items-center">
      <h3 class="h3-text text-links">${{ props.pricePerMonth }}/Month</h3>

      <div class="icon-container ml-auto">
        <SizeIcon />
        <span class="body-text">{{ props.size }} ft<sup>2</sup></span>
      </div>
    </main>

    <footer class="flex gap-5 border-t border-t-light-darked pt-4">
      <div class="icon-container mr-auto">
        <LocationIcon />
        <span class="body-text">{{ props.location }}</span>
      </div>

      <div class="icon-container">
        <BedroomIcon />
        <span class="body-text">{{ props.bedAmout }}</span>
      </div>

      <div class="icon-container">
        <BathroomIcon />
        <span class="body-text">{{ props.bathAmout }}</span>
      </div>
    </footer>
  </article>
</template>

<style scoped lang="scss">
.card {
  @apply flex w-[85%] flex-col gap-7 rounded-xl p-5 sm:w-full;
  box-shadow: 0px 0px 4px rgba(#000000, 0.1);
}
.icon-container {
  @apply flex items-center gap-2 text-grey;
}
</style>
