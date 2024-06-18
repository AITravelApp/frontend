<script setup lang="ts">
defineProps({
  event: {
    type: Object,
    required: true,
  },
});


</script>

<template>
  <q-card
    class="my-card w-[350px] h-[500px] flex flex-col justify-between shadow-2xl rounded-lg overflow-hidden"
  >
    <div>
      <q-img class="w-[350px] h-[200px] object-cover" :src="event.thumbnail" />
      <q-card-section class="flex flex-col gap-2 p-4">
        <div class="flex justify-between items-center">
          <h2 class="text-xl max-w-56 truncate font-semibold">
            {{ event.title }}
          </h2>
          <p class="text-lg font-semibold text-gray-700">
            {{ event.start_date }}
          </p>
        </div>
        <p class="text-sm text-gray-100 font-semibold">{{ event.date.when }}</p>
        <p class="text-sm text-gray-500">{{ event.address[1] }}</p>
        <!-- link -->

        <div v-if="event.venue" class="flex items-center gap-3 mt-2">
          <q-rating
            v-model="event.venue.rating"
            :readonly="true"
            :max="5"
            size="1.5em"
            color="secondary"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            :no-dimming="true"
          />
          <p class="font-bold">{{ event.venue.reviews }} reviews</p>
        </div>
        <div class="mt-2 text-sm text-gray-500">
          <p>{{ event.when }}</p>
          <p>
            <span class="font-semibold">Description:</span>
            {{ event.description }}
          </p>
        </div>
      </q-card-section>
    </div>
    <q-card-actions align="right">
      <a
        v-if="event.link"
        :href="event.link"
        target="_blank"
        class="text-primary font-semibold"
      >
        <button
          class="text-black p-3 bg-secondary w-32 text-[15px] rounded-lg whitespace-nowrap"
        >
          More details
        </button>
      </a>
    </q-card-actions>
  </q-card>
</template>
