<script setup lang="ts">
import PaymentIcon from "../icons/benefits/PaymentIcon.vue";
import SupportIcon from "../icons/benefits/SupportIcon.vue";
import ContactIcon from "../icons/benefits/ContactIcon.vue";
import LocationIcon from "../icons/benefits/LocationIcon.vue";

const benefits = [
  {
    title: "Easy Payment",
    subtitle: "Reliable 24-hour consulting service, offering expect guidance and support for your success around the clock",
    icon: PaymentIcon,
  },
  {
    title: "24 Hours Support",
    subtitle: "Count on us 24/7 for unwavering support, ensuring your needs are met anytime, anywhere.",
    icon: SupportIcon,
  },
  {
    title: "Simple Contact",
    subtitle: "Streamlined contact for quick assistance. We make reaching us simple and hassle- free for you.",
    icon: ContactIcon,
  },
  {
    title: "Strategic Location",
    subtitle: "Optimal location: Elevate accessibility and investment potential for lasting success and growth.",
    icon: LocationIcon,
  },
];
</script>

<template>
  <section class="m-comp container mx-auto text-balance text-center">
    <p class="body-text body-text_uppercase">elevate your yourney</p>
    <h2 class="h2-text">Why chose our Platform?</h2>

    <div class="benefits">
      <div v-for="item in benefits" class="benefits__item">
        <div class="benefits__icon">
          <component :is="item.icon" />
        </div>
        <p class="title-text">{{ item.title }}</p>
        <p class="body-text">{{ item.subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.benefits {
  @apply mt-10;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px 20px;
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  &__icon {
    @apply flex aspect-square w-20 items-center justify-center  rounded-full bg-light-darked;
  }
}
</style>
