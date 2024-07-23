<template class="template">
      <div>Etapa <span class="currentStep">{{ currentStep + 1 }}</span> de {{ totalSteps }}</div>
    <component :is="currentStepComponent" />
</template>

<script setup>
import { computed } from 'vue';
import StepOne from './components/StepOne.vue';
import StepTwo from './components/StepTwo.vue';
import StepThree from './components/StepThree.vue';
import StepFour from './components/StepFour.vue';
import { useStore } from './composables/useStore';

const store = useStore();
const stepComponents = [StepOne, StepTwo, StepThree, StepFour];
const currentStepComponent = computed(() => stepComponents[store.state.step]);
const currentStep = computed(() => store.state.step);
const totalSteps = stepComponents.length;
</script>
