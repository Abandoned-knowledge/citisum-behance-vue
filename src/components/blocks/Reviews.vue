<script setup lang="ts">
import LocationIcon from "@/components/icons/cards/LocationIcon.vue";
import QuoteIcon from "@/components/icons/slider/QuoteIcon.vue";
import SlideNextIcon from "@/components/icons/slider/SlideNextIcon.vue";
import SlidePrevIcon from "@/components/icons/slider/SlidePrevIcon.vue";
import reviews from "@/data/reviews";
import { onMounted, ref } from "vue";
import { type reviewStorage } from "@/interfaces/interfaces";

let paginationItems = ref([]);
let currentSlideIndex = ref<number>(1).value;
let currentReview = ref<reviewStorage>();
const slideNext = () => {
  currentSlideIndex++;
  if (currentSlideIndex > reviews.length) currentSlideIndex = 1;
  selectReview(currentSlideIndex);
};

const slidePrev = () => {
  currentSlideIndex--;
  if (currentSlideIndex <= 0) currentSlideIndex = reviews.length;
  selectReview(currentSlideIndex);
};

function selectReview(id: number): void {
  const review = reviews.find((review) => review.id == id);
  review ? (currentReview.value = review) : (currentReview.value = reviews[0]);

  selectPaginationItem(id);
}

function selectPaginationItem(id: number | undefined): void {
  let items: HTMLDivElement[] = paginationItems.value;
  let currentItem: HTMLDivElement;
  typeof id == "undefined" ? (currentItem = items[1]) : (currentItem = items[id - 1]);

  items.forEach((item: HTMLElement) => {
    item.classList.remove("selected");
  });

  currentItem.classList.add("selected");
}

onMounted(() => {
  selectReview(1);
});
</script>

<template>
  <section class="m-comp flex h-screen items-center bg-dark">
    <section class="container mx-auto flex h-full flex-col items-center justify-center gap-5">
      <p class="body-text text-center text-grey">Client Reviews</p>
      <h2 class="h2-text text-center text-light">what our customer are saying</h2>

      <article class="review">
        <div class="review__photo">
          <img class="review__image" :src="currentReview?.imgUrl" alt="" />
          <p class="title-text">{{ currentReview?.name }}</p>
          <div class="review__location">
            <LocationIcon />
            <p class="body-text">{{ currentReview?.location }}</p>
          </div>
        </div>

        <div class="review__content">
          <div class="review__text">
            <QuoteIcon class="review__quote" />
            <p class="body-text w-full">{{ currentReview?.content }}</p>
            <QuoteIcon class="review__quote" />
          </div>

          <div class="review__navigation">
            <div @click="slidePrev" class="review__slider-button">
              <SlidePrevIcon />
            </div>

            <div class="review__pagination">
              <div
                @click="selectPaginationItem(currentReview?.id)"
                ref="paginationItems"
                class="review__pagination-item"
                v-for="i in reviews.length"
              ></div>
            </div>

            <div @click="slideNext" class="review__slider-button">
              <SlideNextIcon />
            </div>
          </div>
        </div>
      </article>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.review {
  @apply mt-10 flex flex-col gap-5 md:flex-row lg:gap-16;

  &__photo {
    @apply order-2 flex flex-col items-center gap-3 rounded-2xl bg-white p-4 md:-order-1 md:w-[50%] lg:gap-5 lg:p-7;
  }

  &__image {
    @apply aspect-[1/.55] w-full rounded-xl object-cover;
  }

  &__location {
    @apply flex items-center gap-2 text-grey;
  }

  &__content {
    @apply flex flex-col items-center md:w-[50%] lg:gap-5;
  }

  &__text {
    @apply order-2 flex h-full min-h-[200px] w-full flex-col items-center justify-between rounded-2xl bg-white p-4 text-center font-normal text-grey sm:p-7 md:-order-1;
  }

  &__quote {
    @apply h-12 w-12
    sm:h-14 sm:w-14
    md:h-16 md:w-16
    lg:h-20 lg:w-20;

    &:first-child {
      @apply mr-auto;
    }

    &:last-child {
      @apply ml-auto rotate-180;
    }
  }

  &__navigation {
    @apply my-4 flex h-fit w-fit gap-5 xl:my-10;
  }

  &__pagination {
    @apply flex items-center justify-center gap-3 rounded-full bg-white px-5;

    &-item {
      @apply h-3 w-3 rounded-full bg-light-darked;

      &.selected {
        @apply bg-dark;
      }
    }
  }

  &__slider-button {
    @apply flex h-10 w-10 items-center justify-center rounded-full bg-white;
  }
}
</style>
