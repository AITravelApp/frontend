<script setup lang="ts">


const props = defineProps({
  restaurant: {
    type: Object,
    required: true,
  },
});

const modifiedThumbnail = computed(() => {
  if (!props.restaurant || !props.restaurant.thumbnail) return "";

  const baseUrl = props.restaurant.thumbnail.split('=')[0];
  const newDimensions = "w500-h500-k-no";
  return `${baseUrl}=${newDimensions}`;
});
</script>

<template>
  <q-card class="my-card w-[350px] h-[500px] flex flex-col justify-between shadow-2xl rounded-lg overflow-hidden">
    <div>
      <q-img class="w-[350px] h-[200px] object-cover" :src="modifiedThumbnail" @error="restaurant.thumbnail" />
      <q-card-section class="flex flex-col gap-2 p-4">
        <div class="flex justify-between items-center">
          <h2 class="text-xl max-w-56 truncate font-semibold">{{ restaurant.title }}</h2>
          <p class="text-lg font-semibold text-gray-700">{{ restaurant.price }}</p>
        </div>
        <p class="text-sm text-gray-100 font-semibold">{{ restaurant.type }}</p>
        <p class="text-sm text-gray-500">{{ restaurant.address }}</p>
        <div class="flex items-center gap-3 mt-2">
          <q-rating
            v-model="restaurant.rating"
            :readonly="true"
            :max="5"
            size="1.5em"
            color="secondary"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            :no-dimming="true"
          />
          <p class="font-bold">{{ restaurant.reviews }} reviews</p>
        </div>
        <div class="mt-2 text-sm text-gray-500">
          <p>{{ restaurant.open_state }}</p>
          <p>Phone: {{ restaurant.phone }}</p>
        </div>
      </q-card-section>
    </div>
    <q-card-actions align="right">
        <RestaurantDrawer :restaurant="restaurant" />
      </q-card-actions>
  </q-card>
</template>

