<template>
  <h1>{{ userData.personType === 'PF' ? "Pessoa Física" : "Pessoa Jurídica" }}</h1>
  <form @submit.prevent="submitForm">
    <div v-if="userData.personType === 'PF'" class="form">
      <label for="fullName">Nome Completo:</label>
      <input type="text" id="fullName" v-model="userData.fullName" required />

      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" v-model="userData.cpf" required />

      <label for="birthdate">Data de Nascimento:</label>
      <input type="date" id="birthdate" v-model="userData.birthdate" required />

      <label for="phone">Número de Telefone:</label>
      <input type="text" id="phone" v-model="userData.phone" required />
    </div>
    <div v-if="userData.personType === 'PJ'" class="form">
      <label for="companyName">Razão Social:</label>
      <input type="text" id="companyName" v-model="userData.companyName" required />

      <label for="cnpj">CNPJ:</label>
      <input type="text" id="cnpj" v-model="userData.cnpj" required />

      <label for="openingDate">Data de Abertura:</label>
      <input type="date" id="openingDate" v-model="userData.openingDate" required />

      <label for="phone">Telefone da Empresa:</label>
      <input type="text" id="phone" v-model="userData.phone" required />
    </div>

    <div class="wrapper">
      <button type="button" @click="goBack" class="outLinedBtn">Voltar</button>
      <button type="submit" class="btn">Continuar</button>
    </div>
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

function goBack() {
  store.previousStep();
}
</script>
