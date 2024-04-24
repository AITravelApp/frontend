<script setup>
import { ref } from 'vue'
const step = ref(1)

const questions = [
  '',
  'What type of traveler are you?',
  'Which type of trip would you like?',
  'What are some activities you would enjoy on your vacation?',
  'Which of these experiences match your previous decisions?',
  'With whom are you traveling?'
]


</script>


<template>
    <section class="flex flex-col justify-center items-center h-screen gap-5 -mt-16">
        <h1 class="font-medium text-2xl">Question {{ step }} / 5</h1>
        <h2 class="font-semibold text-3xl max-w-xl text-center">{{ questions[step] }}</h2>
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
          <q-step
            :name="1"
            :done="step > 1"
           
          >
          
            For each ad campaign that you create, you can control how much you're willing to
            spend on clicks and conversions, which networks and geographical locations you want
            your ads to show on, and more.
          </q-step>
        
          <q-step
            :name="2"
            :done="step > 2"
            
          >
            
            An ad group contains one or more ads which target a shared set of keywords.
            
          </q-step>
        
          <q-step
            :name="3"
            :done="step > 3"
            
          >
        
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
          
          </q-step>

          <q-step
            :name="4"
            :done="step > 4"
            
          >
          
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
       
          </q-step>

          <q-step
            :name="5"
            :done="step > 5"
            
          >
          
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
         
          </q-step>
        
          <template v-slot:navigation>
            <q-stepper-navigation>
             <div class="flex justify-between mt-16 ">
              <q-btn v-if="step > 1" flat color="secondary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
              <q-btn @click="$refs.stepper.next()" color="secondary" :label="step === 5 ? 'Finish' : 'Continue'" />
              </div>
            </q-stepper-navigation>
          </template>
        </q-stepper>
    </section>
  </template>
  