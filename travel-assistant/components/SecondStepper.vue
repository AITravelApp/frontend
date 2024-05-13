<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const step = ref(1);
const store = useStepperStore()
const router = useRouter()
const counter = computed(() => step.value + 5)


const questions = [
  "",
  "What type of traveler are you?",
  "Which type of trip would you like?",
  "What are some activities you would enjoy on your vacation?",
  "Which of these experiences match your previous decisions?",
  "With whom are you traveling?",
];

const form = ref({
  question1: [],
  question2: [],
  question3: [],
  question4: [],
  question5: [],
});

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
      active-color="secondary"
      done-color="secondary"
    >
      <q-step title="question 1" :name="1" :done="step > 1">
        <article class="flex flex-col ml-10">
          <q-checkbox
            v-model="form.question1"
            val="Wants to spend everyday discovering something new"
            label="Wants to spend everyday discovering something new"
          />
          <q-checkbox
            v-model="form.question1"
            val="Wants to just relax and enjoy the area where they booked"
            label="Wants to just relax and enjoy the area where they booked"
          />
          <q-checkbox
            v-model="form.question1"
            val="Wants a combination of discovering new places and relaxation"
            label="Wants a combination of discovering new places and relaxation"
          />
        </article>
      </q-step>
      <q-step title="question 2" :name="2" :done="step > 2">
        <article class="grid grid-cols-2 place-items-center">
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.question2"
              val="Outdoor trip(hiking, biking)"
              label="Outdoor trip(hiking, biking)"
            />
            <q-checkbox
              v-model="form.question2"
              val="Festive trip (festivals, clubs)"
              label="Festive trip (festivals, clubs)"
            />
            <q-checkbox
              v-model="form.question2"
              val="Cultural trip (historical, cultural experiences)"
              label="Cultural trip (historical, cultural experiences)"
            />
          </div>
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.question2"
              val="Beach trip (coastal areas, swimming)"
              label="Beach trip (coastal areas, swimming)"
            />
            <q-checkbox
              v-model="form.question2"
              val="Urban trip (cities, metropolitan areas)"
              label="Urban trip (cities, metropolitan areas)"
            />
          </div>
        </article>
      </q-step>

      <q-step title="question 3" :name="3" :done="step > 3">
        <article class="grid grid-cols-2 place-items-center">
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.question3"
              val="Cultural activities(museums, monuments)"
              label="Cultural activities(museums, monuments)"
            />
            <q-checkbox
              v-model="form.question3"
              val="Outdoor activities (hiking, biking)"
              label="Outdoor activities (hiking, biking)"
            />
            <q-checkbox
              v-model="form.question3"
              val="Food and culinary experiences"
              label="Food and culinary experiences"
            />

            <q-checkbox
              v-model="form.question3"
              val="Beach activities(sunbathing, swimming)"
              label="Beach activities(sunbathing, swimming)"
            />
          </div>
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.question3"
              val="Shopping activities(malls, botiques)"
              label="Shopping activities(malls, botiques)"
            />
            <q-checkbox
              v-model="form.question3"
              val="Exploring the nearby area(towns, cities)"
              label="Exploring the nearby area(towns, cities)"
            />
            <q-checkbox
              v-model="form.question3"
              val="Relaxation(wellness)"
              label="Relaxation(wellness)"
            />
            <q-checkbox
              v-model="form.question3"
              val="Concerts and festivals "
              label="Concerts and festivals "
            />
          </div>
        </article>
      </q-step>

      <q-step title="question 4" :name="4" :done="step > 4">
        <article class="grid grid-cols-2 place-items-center">
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.question4"
              val="Experiencing Italian night life. "
              label="Experiencing Italian night life. "
            />
            <q-checkbox
              v-model="form.question4"
              val="Savoring Italian cuisine(pizza, gelato, etc...)"
              label="Savoring Italian cuisine(pizza, gelato, etc...)"
            />
            <q-checkbox
              v-model="form.question4"
              val="Visiting different museums"
              label="Visiting different museums"
            />

            <q-checkbox
              v-model="form.question4"
              val="Sightseeing historic buildings and cities"
              label="Sightseeing historic buildings and cities"
            />
          </div>
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.question4"
              val="Exploring coastal areas"
              label="Exploring coastal areas"
            />
            <q-checkbox
              v-model="form.question4"
              val="Exploring the nearby nature"
              label="Exploring the nearby nature"
            />
            <q-checkbox
              v-model="form.question4"
              val="Shopping at popular destinations"
              label="Shopping at popular destinations"
            />
            <q-checkbox
              v-model="form.question4"
              val="Experiencing Italian wines, cocktails, etc.."
              label="Experiencing Italian wines, cocktails, etc.. "
            />
          </div>
        </article>
      </q-step>
      <q-step title="question 5" :name="5" :done="step > 5">
        <article class="grid grid-cols-2 place-items-center">
          <div class="flex flex-col">
            <q-checkbox v-model="form.question5" val="Solo" label="Solo" />
            <q-checkbox
              v-model="form.question5"
              val="With friends"
              label="With friends"
            />
            <q-checkbox
              v-model="form.question5"
              val="With family"
              label="With family"
            />
          </div>
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.question5"
              val="With partner"
              label="With partner"
            />
          </div>
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
              @click="() => step === 5 ? router.push('/recommendations') : ($refs.stepper as any).next()"
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
