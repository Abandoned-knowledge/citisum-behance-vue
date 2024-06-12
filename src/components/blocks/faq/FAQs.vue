<script setup lang="ts">
import FAQItem from "./FAQItem.vue";
import FAQs from "@/data/FAQs";
</script>

<template>
  <section id="faqs" class="m-comp container mx-auto">
    <p class="body-text text-center">FAQs Answered</p>
    <h2 class="h2-text text-center">Frequently Asked Questions</h2>

    <div class="mx-auto mt-16 flex w-[80%] flex-col gap-5">
      <FAQItem v-for="faq in FAQs" :title="faq.title" :content="faq.content" />
    </div>
  </section>
</template>
