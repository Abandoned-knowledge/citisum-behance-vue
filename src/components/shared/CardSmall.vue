<script setup lang="ts">
import { type cardStorage } from "@/interfaces/interfaces";
import LocationIcon from "@/components/icons/cards/LocationIcon.vue";
import BedroomIcon from "@/components/icons/cards/BedroomIcon.vue";
import BathroomIcon from "@/components/icons/cards/BathroomIcon.vue";
import SizeIcon from "@/components/icons/cards/SizeIcon.vue";

const props = defineProps<cardStorage>();
</script>

<template>
  <article class="card">
    <div class="card-bg-gradient flex aspect-[1/.8] w-full items-center justify-center rounded-xl">
      <img :src="props.img" alt="alt" class="h-full w-auto" />
    </div>
    <header class="flex flex-wrap justify-between">
      <p class="title-text">{{ props.title }}</p>
      <a href="#" class="link-text">View More</a>
    </header>

    <div class="icon-container">
      <LocationIcon />
      <span class="body-text">{{ props.location }}</span>
    </div>

    <footer class="flex gap-5">
      <div class="icon-container">
        <BedroomIcon />
        <span class="body-text">{{ props.bedAmout }}</span>
      </div>

      <div class="icon-container">
        <BathroomIcon />
        <span class="body-text">{{ props.bathAmout }}</span>
      </div>

      <div class="icon-container ml-auto">
        <SizeIcon />
        <span class="body-text">{{ props.size }} ft<sup>2</sup></span>
      </div>
    </footer>
  </article>
</template>

<style scoped lang="scss">
.card {
  @apply flex w-[85%] flex-col gap-5 rounded-xl p-5 sm:w-full;
  box-shadow: 0px 0px 4px rgba(#000000, .1);
}
.icon-container {
  @apply flex items-center gap-2 text-grey;
}
</style>
