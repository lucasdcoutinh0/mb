<template>
  <h1>Seja bem vindo(a)</h1>
  <form @submit.prevent="submitForm">
    <label for="email">Endereço de e-mail</label>
    <input type="email" id="email" v-model="userData.email" required />

    <label for="personType">Tipo de cadastro:</label>
    <select id="personType" v-model="userData.personType" required>
      <option value="">Selecione uma opção</option>
      <option value="PF">Pessoa Física</option>
      <option value="PJ">Pessoa Jurídica</option>
    </select>

    <button type="submit">Continuar</button>
  </form>
</template>

<script setup>
import { toRefs } from 'vue';
import { useStore } from '../composables/useStore';

const store = useStore();
const { userData } = toRefs(store.state);

function submitForm() {
  store.nextStep();
}
</script>
