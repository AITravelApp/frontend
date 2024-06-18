<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  restaurant: {
    type: Object,
    required: true,
  },
});

const modifiedThumbnail = computed(() => {
  if (!props.restaurant || !props.restaurant.thumbnail) return "";

  // Assuming props.restaurant.thumbnail contains the URL
  // Extract the base URL and append new dimensions
  const baseUrl = props.restaurant.thumbnail.split("=")[0];
  const newDimensions = "w1000-h1000-k-no"; // Change dimensions as needed
  return `${baseUrl}=${newDimensions}`;
});

const maximizedToggle = ref(true);
const drawer = ref(false);
</script>

<template>
  <button
    @click="drawer = !drawer"
    class="text-black p-3 bg-secondary w-32 text-[15px] rounded-lg whitespace-nowrap"
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
            :src="modifiedThumbnail" @error="restaurant.thumbnail"
            style="width: 900px; height: 500px"
            class="rounded-md shadow-xl"
          />
          <article class="flex justify-between items-center w-[900px] mt-5">
            <h1 class="text-3xl text-black font-semibold">
              {{ restaurant.title }}
            </h1>
            <div class="flex gap-3 items-center">
              <q-rating
                v-model="restaurant.rating"
                readonly
                max="5"
                size="1.5em"
                color="secondary"
                icon="star_border"
                icon-selected="star"
                icon-half="star_half"
                no-dimming
              />
              <p class="text-[17px] font-semibold">{{ restaurant.reviews }}+</p>
            </div>
          </article>
          <article class="flex justify-between items-center w-[900px] mt-4">
            <div class="flex gap-3 items-center">
              <Icon name="fluent:location-28-filled" color="red" size="30px" />
              <h2 class="text-xl">{{ restaurant.address }}</h2>
            </div>
            <p class="text-[20px] font-bold">{{ restaurant.price }}</p>
          </article>
          <div class="w-[900px] h-[1px] bg-grey mt-10 opacity-45"></div>
          <article class="flex items-center gap-5 mt-10">
            <div class="flex gap-2 items-center">
              <Icon name="mingcute:tag-2-fill" size="30px" color="black" />
              <p class="text-[18px]">{{ restaurant.type }}</p>
            </div>
            <div v-if="restaurant.phone" class="flex gap-2 items-center">
              <Icon name="fa:phone" size="20px" color="black" />
              <p class="text-[18px]">{{ restaurant.phone }}</p>
            </div>
            <div v-if="restaurant.website" class="flex gap-2 items-center">
              <Icon name="fa6-solid:globe" size="22px" color="black" />
              <a target="_blank" :href="restaurant.website">
                <p class="text-[18px] underline">{{ restaurant.name }}</p>
              </a>
            </div>
          </article>
          <Map
            :lat="restaurant.gps_coordinates.latitude"
            :lng="restaurant.gps_coordinates.longitude"
          />
        </section>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
