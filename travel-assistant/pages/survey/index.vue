<script setup lang="ts">
    import {useStepperStore} from '../../stores/StepperStore'
    const store = useStepperStore();

    console.log(store.count)
</script>

<template>
  <section>
    <Stepper v-if="store.count === 1"/>
    <FirstBreak v-if="store.count === 2"/>
    <SecondStepper v-if="store.count === 3" />
  </section>
</template>
