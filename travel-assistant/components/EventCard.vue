<script setup lang="ts">
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-card class="drop-shadow">
    <q-img class="relative w-[350px] h-[500px]" :src="event.image">
      <div
        class="absolute top-3/4 left-1/2 cursor-pointer -translate-x-1/2 text-subtitle2 text-center rounded-lg opacity-80 hover:opacity-100 -mt-5 bg-secondary"
      >
        <Drawer :event="event" />
      </div>
    </q-img>
  </q-card>
</template>
