<script setup lang="ts">
import SlideNextIcon from "../icons/slider/SlideNextIcon.vue";
import SlidePrevIcon from "../icons/slider/SlidePrevIcon.vue";
import CardBig from "../shared/CardBig.vue";
import { cards } from "@/data/cardBig";
import { onMounted, ref } from "vue";

// swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

let swiperInstance = ref();
let slidesPerView = ref(3);

function resizeWindow() {
  let width = innerWidth;
  if (width > 1024) {
    slidesPerView.value = 3;
  } else if (width <= 1024 && width > 640) {
    slidesPerView.value = 2;
  } else if (width <= 640) {
    slidesPerView.value = 1;
  }
}

window.onresize = resizeWindow;

onMounted(() => {
  window.addEventListener("DOMContentLoaded", resizeWindow);
});

function onSwiper<T>(swiper: T) {
  swiperInstance.value = swiper;
}

function swiperNextSlide(): void {
  swiperInstance.value.slideNext();
}
function swiperPrevSlide(): void {
  swiperInstance.value.slidePrev();
}
</script>

<template>
  <section class="m-comp container mx-auto">
    <p class="body-text body-text_uppercase">best project of the years</p>
    <div class="flex items-center justify-between">
      <h2 class="h2-text">Our Resent Projects</h2>
      <div class="flex gap-5">
        <div @click="swiperPrevSlide" class="slider-button">
          <SlidePrevIcon />
        </div>

        <div @click="swiperNextSlide" class="slider-button">
          <SlideNextIcon />
        </div>
      </div>
    </div>

    <swiper 
    class="cards" 
    :slides-per-view="slidesPerView" 
    :loop="true" 
    :space-between="30" 
    :modules="[Navigation]" 
    @swiper="onSwiper"
    >
      <SwiperSlide v-for="card in cards" class="flex justify-center">
        <CardBig
          :img="card.img"
          :title="card.title"
          :location="card.location"
          :bed-amout="card.bedAmout"
          :bath-amout="card.bathAmout"
          :size="card.size"
          :price-per-month="card.pricePerMonth"
        />
      </SwiperSlide>
    </swiper>
  </section>
</template>
<style scoped lang="scss">
.cards {
  @apply mt-12;
  // grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3;
  gap: 20px 40px;
}

.slider-button {
  @apply flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-dark text-dark transition-all duration-200 ease-in-out hover:bg-dark hover:text-light;

  * {
    stroke-width: 1.5px;
  }
}
</style>
