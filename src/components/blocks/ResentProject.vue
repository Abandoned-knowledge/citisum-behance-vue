<script setup lang="ts">
import Button from "../shared/Button.vue";
import CardSmall from "../shared/CardSmall.vue";
import { cards } from "@/data/card";
</script>

<template>
  <section id="projects" class="m-comp container mx-auto">
    <p class="body-text body-text_uppercase text-grey">best project of the years</p>
    <div class="flex items-center justify-between">
      <h2 class="h2-text">Our Resent Projects</h2>
      <Button>View all categories</Button>
    </div>

    <div class="cards">
      <CardSmall
        v-for="card in cards"
        :img="card.img"
        :title="card.title"
        :location="card.location"
        :bed-amout="card.bedAmout"
        :bath-amout="card.bathAmout"
        :size="card.size"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.cards {
  @apply mt-12 grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-4;
  gap: 20px 40px;
}
</style>
