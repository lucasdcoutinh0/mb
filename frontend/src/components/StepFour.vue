<template>
  <div>
    <h1>Revisão Final dos Dados</h1>
    <form>
      <fieldset disabled>
        <label>Email:</label>
        <input type="email" v-model="userData.email" readonly />

        <label>Tipo de Cadastro:</label>
        <input type="text" v-model="userData.personType" readonly />

        <div v-if="userData.personType === 'PF'">
          <label>Nome Completo:</label>
          <input type="text" v-model="userData.fullName" readonly />

          <label>CPF:</label>
          <input type="text" v-model="userData.cpf" readonly />

          <label>Data de Nascimento:</label>
          <input type="date" v-model="userData.birthdate" readonly />

          <label>Número de Telefone:</label>
          <input type="text" v-model="userData.phone" readonly />
        </div>
        <div v-if="userData.personType === 'PJ'">
          <label>Razão Social:</label>
          <input type="text" v-model="userData.companyName" readonly />

          <label>CNPJ:</label>
          <input type="text" v-model="userData.cnpj" readonly />

          <label>Data de Abertura:</label>
          <input type="date" v-model="userData.openingDate" readonly />

          <label>Telefone da Empresa:</label>
          <input type="text" v-model="userData.phone" readonly />
        </div>

        <label>Senha:</label>
        <input type="password" v-model="userData.password" readonly />
      </fieldset>

      <button type="button" @click="goBack">Editar Dados</button>
      <button type="button" @click="finalizeRegistration">Finalizar Cadastro</button>
    </form>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { useStore } from '../composables/useStore';

const store = useStore();
const { userData } = toRefs(store.state);

function goBack() {
  store.previousStep();
}

function finalizeRegistration() {
  alert('Cadastro finalizado com sucesso!');
}
</script>
