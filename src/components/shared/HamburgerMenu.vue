<script setup lang="ts">
import type { HamburgerMenuItems } from "@/interfaces/interfaces";
import { ref } from "vue";
import { type Ref } from "vue";

const isActive: Ref<boolean> = ref(false);
const props = defineProps<HamburgerMenuItems>();
</script>
<template>
  <div class="hamburger">
    <div class="hamburger__icon" @click="isActive = !isActive">
      <div class="hamburger__line hamburger__line_1"></div>
      <div class="hamburger__line hamburger__line_2"></div>
      <div class="hamburger__line hamburger__line_3"></div>
    </div>
    <nav
      :class="{ block: isActive, hidden: !isActive }"
      class="absolute right-[1%] top-[120%] rounded-xl px-10 py-5 shadow"
    >
      <ul class="flex flex-col items-center gap-5">
        <li v-for="item in props.items" class="link text-nowrap">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.hamburger {
  @apply block lg:hidden;
  &__icon {
    @apply flex w-16 cursor-pointer flex-col items-center justify-between p-[10%];
    aspect-ratio: 1/0.7;
  }

  &__line {
    @apply h-1 w-[90%] rounded-full bg-dark;
  }
}

.link {
  @apply text-dark relative;
  &:hover {
    &::before {
      width: 100%;
    }
  }

  &:before {
    @apply bg-dark;
    transition: all 0.3s ease;
    content: "";
    position: absolute;
    height: 1px;
    top: 100%;
    width: 0;
  }
}
</style>
