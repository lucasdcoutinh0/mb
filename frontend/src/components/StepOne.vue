<template>
  <h1>Seja bem vindo(a)</h1>
  <form @submit.prevent="submitForm">
    <label for="email">Endereço de e-mail</label>
    <input type="email" id="email" v-model="userData.email" required />

    <div class="wrapper">
      <div class="radioWrapper">
        <input type="radio" id="PF" value="PF" v-model="userData.personType" checked />
        <label for="PF">Pessoa Física</label>
      </div>

      <div class="radioWrapper">
        <input type="radio" id="PJ" value="PJ" v-model="userData.personType" />
        <label for="PJ">Pessoa Jurídica</label>
      </div>
    </div>

    <button type="submit" class="btn">Continuar</button>
  </form>
</template>

<script setup>
import { toRefs } from 'vue';
import { useStore } from '../composables/useStore';

const store = useStore();
const { userData } = toRefs(store.state);

if (!userData.personType) {
  userData.personType = 'PF';
}

function submitForm() {
  store.nextStep();
}
</script>
