<script setup lang="ts">
    const store = useStepperStore()
</script>

<template>
  <section
    class="flex flex-col justify-center items-center h-screen gap-7 -mt-16"
  >
    <h1 class="font-medium text-2xl">Question 5/5</h1>
    <h2 class="font-semibold text-4xl max-w-3xl text-center">
      The first 5 questions have been completed, thank you for taking the time
      to fill them in.
    </h2>
    <p class="text-center text-lg max-w-xl">
      You now have the option to skip to the recommendations or stick around to
      answer more questions so we can personalize the recommendations more.
    </p>
    <article class="flex justify-center items-center gap-16 mt-5 text-md">
      <NuxtLink href="/recommendations">
      <q-btn no-caps outline class="p-2 w-44 text-black rounded-md">Skip</q-btn>
      </NuxtLink>
      <q-btn color="secondary" no-caps @click="store.increment()" class="p-2 w-44  rounded-md text-black">Proceed</q-btn>
    </article>
  </section>
</template>
