<script setup lang="ts">
import Button from "../shared/Button.vue";
</script>

<template>
  <section
    class="main-gradient m-comp container relative mx-auto flex flex-col items-center justify-center rounded-2xl p-20 text-center lg:items-start lg:justify-start lg:text-start">
    <div class="flex flex-col items-center gap-5 lg:w-[50%] lg:items-start">
      <h3 class="h3-text">Get Started with home</h3>
      <p class="body-text text-grey">Subscribe and find super attractive price quotes from us, Find your residence soon</p>
      <Button>Get Started</Button>
    </div>
    <img
      class="absolute bottom-[-50%] right-[-20%] hidden scale-[.6] lg:block xl:bottom-[-60%] xl:right-[-12.5%] xl:scale-[.75]"
      src="@/assets/img/hero-img.png"
      alt=""
    />
  </section>
</template>

<style lang="scss" scoped></style>
