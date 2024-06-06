<script setup lang="ts">
import { ref } from "vue";
import BarCard from "./BarCard.vue";

const slide = ref(1);
const data = localStorage.getItem("recommendations");
const parsedData = data ? JSON.parse(data) : { bars: [] };
const bars = parsedData.bars;

const groupedBars: any[] = [];
const chunkSize = 3;

for (let i = 0; i < bars.length; i += chunkSize) {
  groupedBars.push(bars.slice(i, i + chunkSize));
}
</script>

<template>
  <div class="q-pa-md q-gutter-sm" style="margin-bottom: 20px;"></div>
  <div class="w-[80%] -mt-10" style="overflow-y: auto;">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="black"
      padding
      arrows
      height="450px"
      class="flex justify-center items-center"
    >
      <q-carousel-slide
        v-for="(barGroup, index) in groupedBars"
        :name="index"
        :key="index"
        class="overflow-hidden"
      >
        <div class="row justify-start items-center no-wrap">
          <BarCard
            v-for="bar in barGroup"
            :key="bar.position"
            :bar="bar"
            class="q-ma-sm"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

