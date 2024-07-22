<template>
    <div>
      <h1>Passo 3: Defina Sua Senha</h1>
      <form @submit.prevent="submitForm">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="button" @click="goBack">Voltar</button>
        <button type="submit">Finalizar Cadastro</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { store } from '../composables/store'; 
  
  const password = ref('');
  
  function submitForm() {
    store.updateField('password', password.value);
    alert('Cadastro concluído com sucesso!');
    store.nextStep();
  }
  
  function goBack() {
    store.previousStep();
  }
  </script>
  