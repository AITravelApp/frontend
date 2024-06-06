<template>
    <q-card
      class="my-card w-[350px] flex flex-col justify-between shadow-2xl rounded-lg overflow-hidden"
    >
      <div>
        <q-img class="w-[350px] h-[200px] object-cover" :src="bar.thumbnail" />
        <q-card-section class="flex flex-col gap-2 p-4">
          <div class="flex justify-between items-center">
            <h2 class="text-xl max-w-56 truncate font-semibold">{{ bar.title }}</h2>
            <p class="text-lg font-semibold text-gray-700">{{ bar.price }}</p>
          </div>
          <p class="text-sm text-gray-100 font-semibold">{{ bar.type }}</p>
          <p class="text-sm text-gray-500">{{ bar.address }}</p>
          <div class="flex items-center gap-3 mt-2">
            <q-rating
              v-model="bar.rating"
              :readonly="true"
              :max="5"
              size="1.5em"
              color="secondary"
              icon="star_border"
              icon-selected="star"
              icon-half="star_half"
              :no-dimming="true"
            />
              
            <p class="font-bold">{{ bar.reviews }} reviews</p>
          </div>
          <div class="mt-2 text-sm text-gray-500">
            <p>{{ bar.open_state }}</p>

            <p v-if="bar.phone">Phone: {{ bar.phone }}</p>
            <p class="text-xs font-semibold" v-else>Phone number not available</p>
          </div>
        </q-card-section>
      </div>
      <q-card-actions align="right">
        <BarDrawer :bar="bar" />
      </q-card-actions>
    </q-card>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref } from "vue";
  import Drawer from "./BarDrawer.vue";
import BarDrawer from "./BarDrawer.vue";
  
  defineProps({
    bar: {
      type: Object,
      required: true,
    },
  });
  
 
  </script>
  