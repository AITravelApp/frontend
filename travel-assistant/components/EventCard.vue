<script setup lang="ts">
    defineProps({
        event: {
            type: Object,
            required: true
        }
    })
</script>

<template>
  <q-card class="drop-shadow">
    <q-img class="relativew w-[350px] h-[500px]" :src="event.image">
      <div
        class="absolute top-3/4 left-1/2 cursor-pointer -translate-x-1/2 text-subtitle2 text-center rounded-lg opacity-80 hover:opacity-100 -mt-5 bg-secondary"
      >
        <button class="text-black w-auto font-semibold text-[18px] whitespace-nowrap">
          {{ event.name }}
        </button>
      </div>
    </q-img>
  </q-card>
</template>
