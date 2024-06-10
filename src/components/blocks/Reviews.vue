<script setup lang="ts">
import LocationIcon from "../icons/cards/LocationIcon.vue";
import QuoteIcon from "../icons/slider/QuoteIcon.vue";
import SlideNextIcon from "../icons/slider/SlideNextIcon.vue";
import SlidePrevIcon from "../icons/slider/SlidePrevIcon.vue";
</script>

<template>
  <section class="m-comp flex h-screen items-center bg-dark">
    <section class="container mx-auto flex h-full flex-col items-center justify-center gap-5">
      <p class="body-text text-center text-grey">Client Reviews</p>
      <h2 class="h2-text text-center text-light">what our customer are saying</h2>

      <article class="review">
        <div class="review__photo">
          <img
            class="review__image"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p class="title-text">Mr. Janaton Aks</p>
          <div class="review__location">
            <LocationIcon />
            <p class="body-text">8500 Preston Rd. Inglewood</p>
          </div>
        </div>

        <div class="review__content">
          <div class="review__text">
            <QuoteIcon class="review__quote" />
            <p class="body-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti culpa asperiores officiis perferendis at aliquid
              recusandae ut odit adipisci?
            </p>
            <QuoteIcon class="review__quote" />
          </div>

          <div class="review__navigation">
            <div class="review__slider-button">
              <SlidePrevIcon />
            </div>

            <div class="review__pagination">
              <div class="review__pagination-item"></div>
              <div class="review__pagination-item"></div>
              <div class="review__pagination-item"></div>
              <div class="review__pagination-item"></div>
            </div>

            <div class="review__slider-button">
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
    @apply relative order-2 flex h-full flex-col items-center justify-center rounded-2xl bg-white p-7 text-center font-normal text-grey md:-order-1;
  }

  &__quote {
    @apply absolute h-16 w-16 lg:h-20 lg:w-20;

    &:first-child {
      @apply left-[5%] top-[5%];
    }

    &:last-child {
      @apply bottom-[5%] right-[5%] rotate-180 lg:right-[30%];
    }
  }

  &__navigation {
    @apply my-4 flex h-fit w-fit gap-5 lg:my-10;
  }

  &__pagination {
    @apply flex items-center justify-center gap-3 rounded-full bg-white px-5;

    &-item {
      @apply h-3 w-3 rounded-full bg-light-darked;
    }
  }

  &__slider-button {
    @apply flex h-10 w-10 items-center justify-center rounded-full bg-white;
  }
}
</style>
