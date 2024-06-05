<script setup lang="ts">
import { ref } from "vue";

type FormType = {
  type_of_traveler: string[];
  type_of_wanted_trip: string[];
  wanted_activities: string[];
  matched_experiences: string[];
  traveling_with: string[];
};

const step = ref(1);
const store = useStepperStore();

const questions = [
  "",
  "What type of traveler are you?",
  "Which type of trip would you like?",
  "What are some activities you would enjoy on your vacation?",
  "Which of these experiences match your previous decisions?",
  "With whom are you traveling?",
];

const form: Ref<FormType> = ref({
  type_of_traveler: [],
  type_of_wanted_trip: [],
  wanted_activities: [],
  matched_experiences: [],
  traveling_with: [],
});
</script>

<template>
  <section
    class="flex flex-col justify-center items-center h-screen gap-5 -mt-16"
  >
    <h1 class="font-medium text-2xl">Question {{ step }} / 5</h1>
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
        <article class="flex flex-col ml-10">
          <q-checkbox
            v-model="form.type_of_traveler"
            val="discovering_everyday"
            label="Wants to spend everyday discovering something new"
          />
          <q-checkbox
            v-model="form.type_of_traveler"
            val="relax_and_enjoy"
            label="Wants to just relax and enjoy the area where they booked"
          />
          <q-checkbox
            v-model="form.type_of_traveler"
            val="both"
            label="Wants a combination of discovering new places and relaxation"
          />
        </article>
      </q-step>
      <q-step title="question 2" :name="2" :done="step > 2">
        <article class="grid grid-cols-2 place-items-center">
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.type_of_wanted_trip"
              val="outdoor_trip"
              label="Outdoor trip(hiking, biking)"
            />
            <q-checkbox
              v-model="form.type_of_wanted_trip"
              val="festivals_and_clubs"
              label="Festive trip (festivals, clubs)"
            />
            <q-checkbox
              v-model="form.type_of_wanted_trip"
              val="cultural_trip"
              label="Cultural trip (historical, cultural experiences)"
            />
          </div>
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.type_of_wanted_trip"
              val="beach_trip"
              label="Beach trip (coastal areas, swimming)"
            />
            <q-checkbox
              v-model="form.type_of_wanted_trip"
              val="urban_trip_cities"
              label="Urban trip (cities, metropolitan areas)"
            />
          </div>
        </article>
      </q-step>

      <q-step title="question 3" :name="3" :done="step > 3">
        <article class="grid grid-cols-2 place-items-center">
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.wanted_activities"
              val="cultural_activities"
              label="Cultural activities(museums, monuments)"
            />
            <q-checkbox
              v-model="form.wanted_activities"
              val="outdoor_activities"
              label="Outdoor activities (hiking, biking)"
            />
            <q-checkbox
              v-model="form.wanted_activities"
              val="food_and_culinary_experiences"
              label="Food and culinary experiences"
            />

            <q-checkbox
              v-model="form.wanted_activities"
              val="beach_activities"
              label="Beach activities(sunbathing, swimming)"
            />
          </div>
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.wanted_activities"
              val="shopping_activities"
              label="Shopping activities(malls, botiques)"
            />
            <q-checkbox
              v-model="form.wanted_activities"
              val="exploring_the_nearby_area"
              label="Exploring the nearby area(towns, cities)"
            />
            <q-checkbox
              v-model="form.wanted_activities"
              val="relaxation"
              label="Relaxation(wellness)"
            />
            <q-checkbox
              v-model="form.wanted_activities"
              val="concerts_and_festivals"
              label="Concerts and festivals"
            />
          </div>
        </article>
      </q-step>

      <q-step title="question 4" :name="4" :done="step > 4">
        <article class="grid grid-cols-2 place-items-center">
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.matched_experiences"
              val="experiencing_italian_night_life"
              label="Experiencing Italian night life. "
            />
            <q-checkbox
              v-model="form.matched_experiences"
              val="savoring_Italian_cuisine"
              label="Savoring Italian cuisine(pizza, gelato, etc...)"
            />
            <q-checkbox
              v-model="form.matched_experiences"
              val="visiting_different_museums"
              label="Visiting different museums"
            />

            <q-checkbox
              v-model="form.matched_experiences"
              val="sightseeing_historic_buildings_and_cities"
              label="Sightseeing historic buildings and cities"
            />
          </div>
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.matched_experiences"
              val="exploring_coastal_areas"
              label="Exploring coastal areas"
            />
            <q-checkbox
              v-model="form.matched_experiences"
              val="exploring_the_nearby_nature"
              label="Exploring the nearby nature"
            />
            <q-checkbox
              v-model="form.matched_experiences"
              val="shopping_at_popular_destinations"
              label="Shopping at popular destinations"
            />
            <q-checkbox
              v-model="form.matched_experiences"
              val="experiencing_Italian_wines,_cocktails"
              label="Experiencing Italian wines, cocktails, etc.. "
            />
          </div>
        </article>
      </q-step>
      <q-step title="question 5" :name="5" :done="step > 5">
        <article class="grid grid-cols-2 place-items-center">
          <div class="flex flex-col">
            <q-checkbox v-model="form.traveling_with" val="solo" label="Solo" />
            <q-checkbox
              v-model="form.traveling_with"
              val="with_friends"
              label="With friends"
            />
            <q-checkbox
              v-model="form.traveling_with"
              val="with_family"
              label="With family"
            />
          </div>
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.traveling_with"
              val="with_partner"
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
              @click="() => step === 5 ? ( store.increment(), console.log(form) ) : ($refs.stepper as any).next()"
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
