<script setup lang="ts">
import { ref } from "vue";
import { activityData } from "../data/activity-data";

const slide = ref(1);
const activities = ref(activityData);
</script>

<template>
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
      height="450px"
      class="flex justify-center items-center"
    >
      <q-carousel-slide
        v-for="(eventGroup, index) in activities"
        :name="index"
        :key="index"
        class="overflow-hidden"
      >
        <div class="row justify-start items-center no-wrap">
          <EventCard
            v-for="event in eventGroup"
            :key="event.id"
            :event="event"
            class="q-ma-sm"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
