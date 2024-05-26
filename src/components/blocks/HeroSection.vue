<script setup lang="ts">
import Button from "../shared/Button.vue";

const benefits = [
  { title: "9k+", description: "Premium Properties" },
  { title: "5k+", description: "Happy Customers" },
  { title: "58k+", description: "Awards Winning" },
];
</script>

<template>
  <section class="main-gradient">
    <div class="container mx-auto flex items-center pb-10 pt-48">
      <div class="flex flex-grow flex-col items-center gap-5 text-center lg:items-start lg:text-left">
        <p class="body-text body-text_uppercase">Lifetime realty partner</p>
        <h1 class="h1-text text-balance">Your Realtor For Life!</h1>
        <p class="subtitle-text">
          You will have everything nearby supermarket, buses, stations, cinemas, theatres, the Carmen neighbourhood, etc.
        </p>

        <div class="flex w-fit flex-wrap justify-center gap-5">
          <Button> Get In Touch </Button>
          <Button> Learn More </Button>
        </div>

        <div class="mt-10 flex w-full justify-between border-t border-grey pt-5 sm:w-auto sm:gap-12 lg:mt-32">
          <div v-for="item in benefits" class="flex flex-col gap-1">
            <p class="title-text">{{ item.title }}</p>
            <p class="body-text">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <img
        src="@/assets/img/hero-img.png"
        class="hidden h-fit w-full translate-x-[15%] translate-y-[10%] scale-[1.6] lg:block"
        alt="Blue house"
      />
    </div>
  </section>
</template>
