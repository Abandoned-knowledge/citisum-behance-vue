<template>
  <button class="button button-text">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  @apply w-fit h-fit rounded-full border border-dark bg-dark px-8 py-4 text-light transition duration-200;

  &:hover {
    @apply bg-opacity-0 text-dark;
  }
}
</style>
