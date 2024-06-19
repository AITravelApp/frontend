<script setup lang="ts">
import { ref } from "vue";
import { getRecommendations } from "~/server/graphqlService";
import { useQuasar } from "quasar";

type FormType = {
  type_of_traveler: string[];
  type_of_wanted_trip: string[];
  wanted_activities: string[];
  matched_experiences: string[];
  traveling_with: string[];
};

const step = ref(1);
const router = useRouter();
const $q = useQuasar();
const showWarning = ref(false);

const questions = [
  "",
  "What type of traveler are you?✈️",
  "What type of landscapes do you enjoy the most on a vacation?🌍",
  "What are some activities you would enjoy on your vacation?💡",
  "What is your budget range for this vacation?💰",
  "With whom are you traveling?✈️",
];

const form: Ref<FormType> = ref({
  type_of_traveler: [],
  type_of_wanted_trip: [],
  wanted_activities: [],
  matched_experiences: [],
  traveling_with: [],
});

const validateStep = (step: number): boolean => {
  switch (step) {
    case 1:
      return form.value.type_of_traveler.length === 1;
    case 2:
      return form.value.type_of_wanted_trip.length > 0;
    case 3:
      return form.value.wanted_activities.length > 0;
    case 4:
      return form.value.matched_experiences.length === 1;
    case 5:
      return form.value.traveling_with.length === 1;
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
    textColor: "white"
  });
  if (step.value === 5) {
    try {
      handleFormSubmission();
      router.push({ path: "/survey/break" });
    } catch (error) {
      console.error("Failed to get recommendations:", error);
    }
  } else {
    step.value++;
  }
};

const handleFormSubmission = async () => {
  try {
    const formData: FormType = {
      type_of_traveler: [...form.value.type_of_traveler],
      type_of_wanted_trip: [...form.value.type_of_wanted_trip],
      wanted_activities: [...form.value.wanted_activities],
      matched_experiences: [...form.value.matched_experiences],
      traveling_with: [...form.value.traveling_with],
    };

    const recommendations = await getRecommendations(
      formData.type_of_traveler,
      formData.type_of_wanted_trip,
      formData.wanted_activities,
      formData.matched_experiences,
      formData.traveling_with
    );
  } catch (error) {
    console.error("Error fetching recommendations:", error);
  }
};
</script>

<template>
  <section
    class="flex flex-col justify-center items-center h-screen gap-5 -mt-12"
  >
    <h2 class="font-semibold text-3xl max-w-xl text-center">
      {{ questions[step] }}
    </h2>
    <q-stepper
      v-model="step"
      ref="stepper"
      contracted
      flat
      animated
      class="w-6/12"
      active-color="primary"
      done-color="primary"
    >
      <q-step title="question 1" :name="1" :done="step > 1">
        <q-separator class="-mt-2 mb-5" />

        <article class="flex flex-col ml-10 mt-5">
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
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.type_of_wanted_trip"
              val="coastal_and_beach"
              label="Coastal and beach views"
            />
            <q-checkbox
              v-model="form.type_of_wanted_trip"
              val="countryside"
              label="Rolling hills and countryside"
            />
            <q-checkbox
              v-model="form.type_of_wanted_trip"
              val="mountains_and_lakes"
              label="Mountainous terrain and lakes"
            />
          </div>
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.type_of_wanted_trip"
              val="historic_cityscapes_and_architecture"
              label="Historic cityscapes and architecture"
            />
          </div>
        </article>
        <q-separator class="mt-5" />
        <p
          v-if="showWarning"
          class="flex justify-center align-center text-negative mt-7 text-[16px]"
        >
          *Please fill in at least one box to help us create the best possible
          itinerary*
        </p>
      </q-step>

      <q-step title="question 3" :name="3" :done="step > 3">
        <q-separator class="-mt-2 mb-5" />
        <article class="grid grid-cols-2 place-items-center">
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.wanted_activities"
              val="experiencing_italian_night_life"
              label="Experiencing Italian night life. "
            />
            <q-checkbox
              v-model="form.wanted_activities"
              val="savoring_Italian_cuisine"
              label="Savoring Italian cuisine(pizza, gelato, etc...)"
            />
            <q-checkbox
              v-model="form.wanted_activities"
              val="visiting_museums_and_art_galleries"
              label="Visiting renowned museums and art galleries"
            />

            <q-checkbox
              v-model="form.wanted_activities"
              val="sightseeing_historic_buildings_and_cities"
              label="Sightseeing historic buildings and cities"
            />
          </div>
          <div class="flex flex-col">
            <q-checkbox
              v-model="form.wanted_activities"
              val="exploring_coastal_areas"
              label="Exploring coastal areas"
            />
            <q-checkbox
              v-model="form.wanted_activities"
              val="exploring_the_nearby_nature"
              label="Discovering the beauty of Italy&rsquo;s countryside"
            />
            <q-checkbox
              v-model="form.wanted_activities"
              val="shopping_at_popular_destinations"
              label="Shopping at famous Italian fashion destinations"
            />
            <q-checkbox
              v-model="form.wanted_activities"
              val="experiencing_Italian_wines,_cocktails"
              label="Tasting Italy&rsquo;s world-famous wines and cocktails"
            />
          </div>
        </article>
        <q-separator class="mt-5" />
        <p
          v-if="showWarning"
          class="flex justify-center align-center text-negative mt-7 text-[16px]"
        >
          *Please fill in at least one box to help us create the best possible
          itinerary*
        </p>
      </q-step>

      <q-step title="question 4" :name="4" :done="step > 4">
        <q-separator class="-mt-2 mb-5" />
        <article class="flex flex-col ml-10">
          <q-checkbox
            v-model="form.matched_experiences"
            val="budget_friendly"
            label="Economy (budget-friendly options)"
          />
          <q-checkbox
            v-model="form.matched_experiences"
            val="mid_range_budget"
            label="Mid-range (comfortable but not extravagant)"
          />
          <q-checkbox
            v-model="form.matched_experiences"
            val="high_range_budget"
            label="Luxury (high-end experiences)"
          />
        </article>
        <q-separator class="mt-5" />
        <p
          v-if="showWarning"
          class="flex justify-center align-center text-negative mt-7 text-[16px]"
        >
          *Please fill in at least one box to help us create the best possible
          itinerary*
        </p>
      </q-step>

      <q-step title="question 5" :name="5" :done="step > 5">
        <q-separator class="-mt-2 mb-5" />
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
        <q-separator class="mt-5" />
        <p
          v-if="showWarning"
          class="flex justify-center align-center text-negative mt-7 text-[16px]"
        >
          *Please fill in at least one box to help us create the best possible
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
