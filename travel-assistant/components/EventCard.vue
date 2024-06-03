<script setup lang="ts">
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-card class="my-card w-[350px] h-[420px] flex flex-col justify-between">
    <div>
      <q-img class="w-[350px] h-[200px]" :src="event.image" />
      <q-card-section class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <h2 class="text-xl max-w-56 truncate">{{ event.name }}</h2>
          <p class="text-lg">{{ event.priceTag }}</p>
        </div>
        <div class="flex items-center gap-3">
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
          <p class="font-bold">{{ event.userReviewCount }}+</p>
        </div>
      </q-card-section>
    </div>

    <q-card-actions align="right">
      <Drawer :event="event" />
    </q-card-actions>
  </q-card>
</template>
