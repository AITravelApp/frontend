<script setup lang="ts">
import { ref, onMounted } from "vue";

let value1 = ref(0);
let value2 = ref(0);
let value3 = ref(0);
let value4 = ref(0);

const animateProgress = (valueRef: Ref<number>, targetValue: number) => {
  const intervalId = setInterval(() => {
    if (valueRef.value < targetValue) {
      valueRef.value++;
    } else {
      clearInterval(intervalId);
    }
  }, 25);
};

onMounted(() => {
  animateProgress(value1, 80); 
  animateProgress(value2, 45); 
  animateProgress(value3, 70); 
  animateProgress(value4, 30); 
});
</script>

<template>
  <section class="flex justify-center items-center mt-10 flex-col gap-3">
    <q-img src="/stepper.jpg" class="w-[50%]" draggable="false" />
    <h1 class="text-[40px] font-semibold">🎉 Congratulations!</h1>
    <p class="text-center text-[18px]">
      You completed the survey and now it is time to see what comes next. <br />
    </p>
    <article class="flex justify-center items-center gap-10 mt-5">
      <div class="flex flex-col items-center">
        <q-circular-progress
          readonly
          rounded
          :min="0"
          :max="100"
          :value="value1"
          show-value
          size="120px"
          :thickness="0.22"
          color="primary"
          track-color="grey-3"
          class="q-ma-md"
        />
        <p class="text-[17px] font-semibold">Culture.</p>
      </div>
      <div class="flex flex-col items-center">
        <q-circular-progress
          readonly
          rounded
          :min="0"
          :max="100"
          :value="value2"
          show-value
          size="120px"
          :thickness="0.22"
          color="primary"
          track-color="grey-3"
          class="q-ma-md"
        />
        <p class="text-[17px] font-semibold">Shopping.</p>
      </div>
      <div class="flex flex-col items-center">
        <q-circular-progress
          readonly
          rounded
          :min="0"
          :max="100"
          :value="value3"
          show-value
          size="120px"
          :thickness="0.22"
          color="primary"
          track-color="grey-3"
          class="q-ma-md"
        />
        <p class="text-[17px] font-semibold">Outdoors.</p>
      </div>
      <div class="flex flex-col items-center">
        <q-circular-progress
          readonly
          rounded
          :min="0"
          :max="100"
          :value="value4"
          show-value
          size="120px"
          :thickness="0.22"
          color="primary"
          track-color="grey-3"
          class="q-ma-md"
          :animated="true"
        />
        <p class="text-[17px] font-semibold">Festivities.</p>
      </div>
    </article>
    <article
      class="flex justify-center items-center gap-10 mt-16 mb-10 text-md"
    >
      <NuxtLink href="/survey">
        <q-btn no-caps outline class="p-2 w-44 text-black rounded-md"
          >Back</q-btn
        >
      </NuxtLink>
      <NuxtLink href="/recommendations">
        <q-btn
          color="secondary"
          no-caps
          class="p-2 w-44 rounded-md text-black font-bold"
          >Proceed</q-btn
        >
      </NuxtLink>
    </article>
  </section>
</template>
