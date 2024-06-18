<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

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

const questions = [
  "",
  "Are there any specific hobbies and interests you’d like to explore during your trip?",
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

function addAnswer() {
  console.log(form.value.question1);
  form.value.question1.push(textareaValue.value);
  textareaValue.value = "";
}

console.log(form.value);
</script>

<template>
  <section
    class="flex flex-col justify-center items-center h-screen gap-5 -mt-16"
  >
    <h1 class="font-medium text-2xl">Question {{ counter }} / 10</h1>
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
        <article class="flex flex-col">
          <textarea
            class="focus:outline-none border p-3 border-grey h-28"
            v-model="textareaValue"
            placeholder="Fill it in here"
          ></textarea>
        </article>
      </q-step>
      <q-step title="question 2" :name="2" :done="step > 2">
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
      </q-step>

      <q-step title="question 3" :name="3" :done="step > 3">
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
      </q-step>

      <q-step title="question 4" :name="4" :done="step > 4">
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
      </q-step>
      <q-step title="question 5" :name="5" :done="step > 5">
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
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <div class="flex justify-between mt-16">
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
              @click="() => step === 5 ? ( addAnswer(), router.push('/summary')) : ($refs.stepper as any).next()"
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
