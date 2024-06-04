<script setup lang="ts">
import { ref } from "vue";


defineProps({
  event: {
    type: Object,
    required: true,
  },
});
const maximizedToggle = ref(true);
const drawer = ref(false);


</script>

<template>
  <button
    @click="drawer = !drawer"
    class="text-black p-3 bg-secondary w-32  text-[15px] rounded-lg whitespace-nowrap"
  >
     More details 
  </button>
  <q-dialog
    v-model="drawer"
    persistent
    :maximized="maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-white text-white">
      <q-bar class="bg-primary h-10 text-black">
        <q-space />
        <q-btn dense flat icon="close" size="15px" class="mr-10" v-close-popup>
          <q-tooltip class="bg-primary text-[15px] text-white">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section class="q-pt-none text-black mb-5">
        <section class="flex justify-center items-center flex-col mt-5">
          <q-img
            :src="event.banner"
            style="width: 900px; height: 500px"
            class="rounded-md shadow-xl"
          />
          <article class="flex justify-between items-center w-[900px] mt-5">
            <h1 class="text-3xl text-black font-semibold">{{ event.name }}</h1>
            <div class="flex gap-3 items-center">
              <q-rating
                v-model="event.averageRating"
                readonly
                max="5"
                size="1.5em"
                color="secondary"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
                no-dimming
              />
              <p class="text-[17px] font-semibold">
                {{ event.userReviewCount }}+
              </p>
            </div>
          </article>
          <article class="flex justify-between items-center w-[900px] mt-4">
            <div class="flex gap-3 items-center">
              <Icon name="fluent:location-28-filled" color="red" size="30px" />
              <a target="_blank" :href="event.maps">
                <h2 class="text-xl">{{ event.location }}</h2>
              </a>
            </div>
            <p class="text-[20px] font-bold">{{ event.priceTag }}</p>
          </article>
          <div class="w-[900px] h-[1px] bg-grey mt-10 opacity-45"></div>
          <article class="flex items-center gap-5 mt-10">
            <div class="flex gap-2 items-center">
              <Icon name="mingcute:tag-2-fill" size="30px" color="black" />
              <p class="text-[18px]">{{ event.tags }}</p>
            </div>
            <div class="flex gap-2 items-center">
              <Icon name="ph:credit-card-fill" size="30px" color="black" />
              <p class="text-[18px]">{{ event.amount }}</p>
            </div>
            <div class="flex gap-2 items-center">
              <Icon name="fa:phone" size="20px" color="black" />
              <p class="text-[18px]">{{ event.phone }}</p>
            </div>
            <div class="flex gap-2 items-center">
              <Icon name="fa6-solid:globe" size="22px" color="black" />
              <a target="_blank" :href="event.website">
                <p class="text-[18px] underline">{{ event.name }}</p>
              </a>
            </div>
          </article>
          <Map />
        </section>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
