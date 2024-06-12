<template>
  <button class="button button-text">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  @apply h-fit w-fit rounded-full border border-dark bg-dark px-12 py-5 text-light transition duration-200;

  &:hover {
    @apply bg-opacity-0 text-dark;
  }
}
</style>
