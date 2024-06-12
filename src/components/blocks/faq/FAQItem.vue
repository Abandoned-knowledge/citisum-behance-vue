<script setup lang="ts">
import { type FAQItemStorage } from "@/interfaces/interfaces";
import { onBeforeMount, onMounted, ref } from "vue";
const props = defineProps<FAQItemStorage>();

let isActive = ref<boolean>(false);
</script>

<template>
  <article class="faq-item" :class="{ active: isActive }">
    <div @click="isActive = !isActive" class="faq-item__header">
      <p class="title-text w-[80%]">{{ props.title }}</p>
      <div class="faq-item__icon"></div>
    </div>
    <div class="faq-item__content body-text w-[90%]">
      <div>
        <p>{{ props.content }}</p>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.faq-item {
  @apply flex flex-col gap-5 py-5;
  border-bottom: 1px solid black;

  &__header {
    @apply flex cursor-pointer items-center justify-between;
  }

  &__content {
    @apply grid text-grey;
    grid-template-rows: 0fr;
    transition: grid-template-rows 300ms ease;

    & > div {
      overflow: hidden;
    }
  }

  &.active {
    .faq-item {
      &__icon {
        &::after {
          height: 0%;
        }
      }
      &__content {
        grid-template-rows: 1fr;
      }
    }
  }

  &__icon {
    width: 20px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before,
    &::after {
      @apply bg-dark;
      content: "";
      position: absolute;
      transition: all 0.3s ease;
    }

    &::before {
      width: 100%;
      height: 2px;
    }

    &::after {
      height: 100%;
      width: 2px;
    }
  }
}
</style>
