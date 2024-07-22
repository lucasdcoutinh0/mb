<template>
  <component :is="currentStepComponent" />
</template>

<script setup>
import { ref, computed } from 'vue';
import StepOne from './components/StepOne.vue';
import StepTwo from './components/StepTwo.vue';
import StepThree from './components/StepThree.vue';
import StepFour from './components/StepFour.vue';
import { store } from './composables/store.js'
const stepComponents = [StepOne, StepTwo, StepThree, StepFour];
const currentStepComponent = computed(() => stepComponents[store.step]);

</script>