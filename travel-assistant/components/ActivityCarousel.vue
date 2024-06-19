<script setup lang="ts">
import { ref } from "vue";


const slide = ref(1);
const data = localStorage.getItem("recommendations");
const parsedData = data ? JSON.parse(data) : { events: [] };
const events = parsedData.events;

const groupedEvents: any[] = [];
const chunkSize = 3;

for (let i = 0; i < events.length; i += chunkSize) {
  groupedEvents.push(events.slice(i, i + chunkSize));
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
      arrows
      padding
      height="650px"
      control-color="black"
      class="flex justify-center items-center"
    >
      <q-carousel-slide
        v-for="(eventGroup, index) in groupedEvents"
        :name="index"
        :key="index"
        class="overflow-hidden"
      >
        <div class="row justify-start items-center no-wrap">
          <EventCard
            v-for="event in eventGroup"
            :key="event.position"
            :event="event"
            class="q-ma-sm"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
