<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

interface Form {
  question1: string[];
  question2: string[];
  question3: string[];
  question4: string[];
  question5: string[];
}

const step = ref(1);
const router = useRouter();
const counter = computed(() => step.value + 5);
const textareaValue = ref("");
const $q = useQuasar();
const showWarning = ref();

const questions = [
  "",
  "Which aspect of Italian culture are you most excited to explore?",
  "Do you like exploring local villages / cities to enjoy the traditional architecure?",
  "Would you like recommendations for local restuarants, food markets, or wine tasting?",
  "Are you looking for cost-efficitive options when it comes to events and activities?",
  "Italy hosts numerous festivals throughout the year. Would you like recommendations for specific festivals?",
];

const form = ref<Form>({
  question1: [],
  question2: [],
  question3: [],
  question4: [],
  question5: [],
});

const validateStep = (step: number): boolean => {
  switch (step) {
    case 1:
      return form.value.question1.length === 1;
    case 2:
      return form.value.question2.length === 1;
    case 3:
      return form.value.question3.length === 1;
    case 4:
      return form.value.question4.length === 1;
    case 5:
      return form.value.question5.length === 1;
    default:
      return false;
  }
};

const handleNext = async () => {
  if (!validateStep(step.value)) {
    showWarning.value = true;
    return;
  }
  showWarning.value = false;
  const stepsLeft = 5 - step.value;
  $q.notify({
    message: `Question ${step.value} completed. Only ${stepsLeft} question${
      stepsLeft !== 1 ? "s" : ""
    } left.`,
    position: "bottom-right",
    color: "accent",
    textColor: "white",
  });
  if (step.value === 5) {
    try {
      router.push({ path: "/summary" });
    } catch (error) {
      console.error("Failed to get recommendations:", error);
    }
  } else {
    step.value++;
  }
};
</script>

<template>
  <section
    class="flex flex-col justify-center items-center h-screen gap-5 -mt-16"
  >
    <h2 class="font-semibold text-3xl max-w-xl text-center">
      {{ questions[step] }}
    </h2>
    <q-stepper
      v-model="step"
      ref="stepper"
      contracted
      header-nav
      flat
      animated
      class="w-6/12"
      active-color="primary"
      done-color="primary"
    >
      <q-step title="question 1" :name="1" :done="step > 1">
        <q-separator class="-mt-2 mb-5" />
        <article class="flex flex-col ml-10">
          <q-checkbox
            v-model="form.question1"
            val="history_and_art"
            label="The rich history and art"
          />
          <q-checkbox
            v-model="form.question1"
            val="vibrant_music_and_entertainment"
            label="The vibrant music and entertainment scene"
          />
          <q-checkbox
            v-model="form.question1"
            val="family_lifestyle_and_local_festivals"
            label="The family-oriented lifestyle and local festivals"
          />
        </article>
        <q-separator class="mt-5" />
        <p
          v-if="showWarning"
          class="flex justify-center align-center text-negative mt-7 text-[16px]"
        >
          *Please fill in one checkbox to help us create the best possible
          itinerary*
        </p>
      </q-step>
      <q-step title="question 2" :name="2" :done="step > 2">
        <q-separator class="-mt-2 mb-5" />
        <article class="grid grid-cols-2 place-items-center">
          <q-checkbox
            v-model="form.question2"
            val="User wants to explore local villages and cities in the area that have traditional architecture"
            label="Yes, I like doing that"
          />
          <q-checkbox
            v-model="form.question2"
            val="User does not want to explore local villages and cities in the area that have traditional architecture"
            label="No, I'd rather not"
          />
        </article>
        <q-separator class="mt-5" />
        <p
          v-if="showWarning"
          class="flex justify-center align-center text-negative mt-7 text-[16px]"
        >
          *Please fill in one checkbox to help us create the best possible
          itinerary*
        </p>
      </q-step>

      <q-step title="question 3" :name="3" :done="step > 3">
        <q-separator class="-mt-2 mb-5" />
        <article class="grid grid-cols-2 place-items-center">
          <q-checkbox
            v-model="form.question3"
            val="User wants recommendations for local restaurants, food markets and wine tasting"
            label="Yes, I would like that"
          />
          <q-checkbox
            v-model="form.question3"
            val="User does not want recommendations for local restaurants, food markets and wine tasting"
            label="No, I'd rather not"
          />
        </article>
        <q-separator class="mt-5" />
        <p
          v-if="showWarning"
          class="flex justify-center align-center text-negative mt-7 text-[16px]"
        >
          *Please fill in one checkbox to help us create the best possible
          itinerary*
        </p>
      </q-step>

      <q-step title="question 4" :name="4" :done="step > 4">
        <q-separator class="-mt-2 mb-5" />
        <article class="grid grid-cols-2 place-items-center">
          <q-checkbox
            v-model="form.question4"
            val="User is on a budget and wants to find low cost options when it comes to events and activities"
            label="Yes, I am on a budget"
          />
          <q-checkbox
            v-model="form.question4"
            val="User is not on a budget and doesn't mind spending a good amount of money"
            label="No, not really"
          />
        </article>
        <q-separator class="mt-5" />
        <p
          v-if="showWarning"
          class="flex justify-center align-center text-negative mt-7 text-[16px]"
        >
          *Please fill in one checkbox to help us create the best possible
          itinerary*
        </p>
      </q-step>
      <q-step title="question 5" :name="5" :done="step > 5">
        <q-separator class="-mt-2 mb-5" />
        <article class="grid grid-cols-2 place-items-center">
          <q-checkbox
            v-model="form.question5"
            val="User would like to receive festival recommendations that are in the area"
            label="Yes, I would like that"
          />
          <q-checkbox
            v-model="form.question5"
            val="User does not want to attend festivals while they are on vacation"
            label="No, I'm not a fan of festivals"
          />
        </article>
        <q-separator class="mt-5" />
        <p
          v-if="showWarning"
          class="flex justify-center align-center text-negative mt-7 text-[16px]"
        >
          *Please fill in one checkbox to help us create the best possible
          itinerary*
        </p>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <div class="flex justify-center items-center gap-10">
            <q-btn
              v-if="step > 1"
              color="secondary"
              @click="($refs.stepper as any).previous()"
              class="text-black p-1 w-28"
              outline
            >
              <Icon name="mingcute:arrow-left-line" size="30px" color="black" />
            </q-btn>
            <q-btn
              @click="handleNext"
              color="secondary"
              class="text-black p-1 w-28"
              :label="step === 5 ? 'Finish' : ''"
            >
              <Icon
                v-if="step !== 5"
                name="mingcute:arrow-right-line"
                color="black"
                size="30px"
              />
            </q-btn>
          </div>
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </section>
</template>
