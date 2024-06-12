<script setup lang="ts">
import LogoIcon from "@/components/icons/LogoIcon.vue";
import FacebookIcon from "@/components/icons/SoMe/FacebookIcon.vue";
import InstagramIcon from "@/components/icons/SoMe/InstagramIcon.vue";
import TwitterIcon from "@/components/icons/SoMe/TwitterIcon.vue";
import MastercardIcon from "@/components/icons/payments/MastercardIcon.vue";
import PaypalIcon from "@/components/icons/payments/PaypalIcon.vue";
import VisaIcon from "@/components/icons/payments/VisaIcon.vue";
import ItemLayout from "./FooterLayoutItem.vue";
</script>

<template>
  <footer class="m-comp bg-light-darked">
    <div class="container mx-auto flex flex-col gap-10 pt-20 pb-14">
      <!-- footer up -->
      <div class="footer__up">
        <!-- item 1 -->
        <ItemLayout class="lg:col-span-2 lg:w-[80%]">
          <div class="flex w-fit items-center gap-3">
            <LogoIcon class="inline-block h-10 w-auto" />
            <h3 class="h3-text">Citisum</h3>
          </div>
          <p class="body-text text-grey">The Shortest Distance Between Peradise And The Place You Coll Phone</p>
          <div class="flex w-fit items-center gap-10">
            <MastercardIcon class="icon" />
            <VisaIcon class="icon" />
            <PaypalIcon class="icon" />
          </div>
        </ItemLayout>

        <!-- item 2 -->
        <ItemLayout>
          <p class="title-text">Services</p>
          <ul class="flex flex-col gap-3">
            <li><a href="#" class="body-text text-grey">Email Marketing</a></li>
            <li><a href="#" class="body-text text-grey">Compaigns</a></li>
          </ul>
        </ItemLayout>

        <!-- item 3 -->
        <ItemLayout>
          <p class="title-text">About</p>
          <ul class="flex flex-col gap-3">
            <li><a href="#" class="body-text text-grey">Our Story</a></li>
            <li><a href="#" class="body-text text-grey">Benefits</a></li>
          </ul>
        </ItemLayout>

        <!-- item 4 -->
        <ItemLayout>
          <p class="title-text">Our Address</p>
          <div class="flex flex-col items-center gap-3 lg:items-start">
            <p class="body-text text-grey">1485 Par Drive, Burbank Street California. CA</p>
            <div class="flex w-fit items-center gap-5">
              <FacebookIcon class="icon" />
              <TwitterIcon class="icon" />
              <InstagramIcon class="icon" />
            </div>
          </div>
        </ItemLayout>
      </div>

      <!-- footer down -->
      <div class="border-t border-t-grey pt-5">
        <p class="body-text text-center text-grey">Copyright 2024 - All Right Reserved By Citisum</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.icon {
  height: 24px;
  width: auto;
}

.footer__up {
  @apply grid grid-cols-2 content-center lg:grid-cols-5;

  gap: 50px 20px;

  @media screen and (max-width: 500px) {
    @apply grid-cols-1;
  }
}
</style>
