<template>
  <h1>Passo 1</h1>
  <form @submit.prevent="submitForm">
    <label for="email">Endereço de e-mail:</label>
    <input type="email" id="email" v-model="userData.email" required>

    <label for="personType">Tipo de cadastro:</label>
    <select id="personType" v-model="userData.personType" required>
      <option value="">Selecione uma opção</option>
      <option value="PF">Pessoa Física</option>
      <option value="PJ">Pessoa Jurídica</option>
    </select>

    <button type="submit">Continuar</button>
  </form>
</template>

<script>
import { store } from '../composables/store';
export default {
  data() {
    return {
      userData: {
        email: '',
        personType: ''
      }
    };
  },
  methods: {
    submitForm() {
      for (const key in this.userData) {
        store.updateField(key, this.userData[key]);
      }
      store.nextStep();
    }
  }
};
</script>
