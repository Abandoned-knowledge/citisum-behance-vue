<script setup lang="ts">
import FAQItem from "./FAQItem.vue";
import FAQs from "@/data/FAQs";
</script>

<template>
  <section class="m-comp container mx-auto">
    <p class="body-text text-center">FAQs Answered</p>
    <h2 class="h2-text text-center">Frequently Asked Questions</h2>

    <div class="flex flex-col gap-5 w-[80%] mx-auto mt-16">
      <FAQItem
      v-for="faq in FAQs"
      :title="faq.title"
      :content="faq.content"
      />
    </div>
  </section>
</template>