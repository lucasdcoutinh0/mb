<template>
    <h1 >Senha de acesso</h1>
    <form @submit.prevent="submitForm">
      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="password" required />

      <div class="wrapper">
        <button type="button" @click="goBack" class="outLinedBtn">Voltar</button>
      <button type="submit" class="btn">Continuar</button>
      </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '../composables/useStore';

const store = useStore();
const password = ref('');

function submitForm() {
  store.updateField('password', password.value);
  store.nextStep();
}

function goBack() {
  store.previousStep();
}
</script>
