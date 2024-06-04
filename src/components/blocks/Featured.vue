<script setup lang="ts">
import Button from "../shared/Button.vue";
import CardBig from "../shared/CardBig.vue";
import { cards } from "@/data/cardBig";

</script>

<template>
  <section class="m-comp container mx-auto">
    <p class="body-text body-text_uppercase">best project of the years</p>
    <div class="flex items-center justify-between">
      <h2 class="h2-text">Our Resent Projects</h2>
      <Button>View all categories</Button>
    </div>

    <div class="cards">
      <CardBig
        v-for="card in cards"
        :img="card.img"
        :title="card.title"
        :location="card.location"
        :bed-amout="card.bedAmout"
        :bath-amout="card.bathAmout"
        :size="card.size"
        :price-per-month="card.pricePerMonth"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.cards {
  @apply grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center;
  gap: 20px 40px;
}
</style>