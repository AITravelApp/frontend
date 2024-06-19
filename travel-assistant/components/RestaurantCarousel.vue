<script setup lang="ts">
import { ref } from "vue";
import RestaurantCard from "./RestaurantCard.vue";

const slide = ref(1);
const data = localStorage.getItem("recommendations");
const parsedData = data ? JSON.parse(data) : { restaurants: [] };
const restaurants = parsedData.restaurants;


const groupedRestaurants:any[] = [];
const chunkSize = 3;

for (let i = 0; i < restaurants.length; i += chunkSize) {
  groupedRestaurants.push(restaurants.slice(i, i + chunkSize));
}


</script>

<template>
  <div class="q-pa-md q-gutter-sm"></div>
  <div class="w-[80%] -mt-10">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="black"
      padding
      arrows
      height="600px"
      class="flex justify-center items-center"
    >
      <q-carousel-slide
        v-for="(restaurantGroup, index) in groupedRestaurants"
        :name="index"
        :key="index"
        class="overflow-hidden"
      >
        <div class="row justify-start items-center no-wrap">
          <RestaurantCard
            v-for="restaurant in restaurantGroup"
            :key="restaurant.position"
            :restaurant="restaurant"
            class="q-ma-sm"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
