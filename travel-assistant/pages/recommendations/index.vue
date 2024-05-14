<script setup lang="ts">

import { ref } from 'vue'

const choice = ref(1)
const labels = [
    {
        name: 'Restaurants',
        value: 1
    },
    {
        name: 'Bars',
        value: 2
    },
    {
        name: 'Activities',
        value: 3
    }
]
</script>

<template>
  <section class="flex flex-col justify-center items-center mt-14 mb-24 gap-5">
    <article class="flex items-center gap-10">
      <q-btn
        color="secondary"
        no-caps
        v-for="(label, index) in labels"
        :key="index"
        class="p-3 w-48 text-[18px] rounded-md text-center text-black"
        @click="choice = label.value"
      >
        {{ label.name }}
      </q-btn>
    </article>
    <article class="flex flex-col p-10 gap-5">
    <h1 class="text-4xl font-semibold text-center">Pick your place</h1>
    <p class="text-[17px]">Pick the place you would like to visit and check all the details</p>
    </article>
    <RestaurantCarousel v-if="choice === 1" />
    <ActivityCarousel v-if="choice === 3" />
  </section>
</template>
