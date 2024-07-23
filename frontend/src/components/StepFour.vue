<template>
  <h1 >Revise suas informações</h1>
  <form>
      <label>Email:</label>
      <input type="email" v-model="userData.email" readonly disabled/>
      <div v-if="userData.personType === 'PF'" class="form">
        <label>Nome Completo:</label>
        <input type="text" v-model="userData.fullName" readonly disabled/>

        <label>CPF:</label>
        <input type="text" v-model="userData.cpf" readonly disabled/>

        <label>Data de Nascimento:</label>
        <input type="date" v-model="userData.birthdate" readonly disabled/>

        <label>Número de Telefone:</label>
        <input type="text" v-model="userData.phone" readonly disabled/>
      </div>
      <div v-if="userData.personType === 'PJ'" class="form">
        <label>Razão Social:</label>
        <input type="text" v-model="userData.companyName" readonly disabled/>

        <label>CNPJ:</label>
        <input type="text" v-model="userData.cnpj" readonly disabled/>

        <label>Data de Abertura:</label>
        <input type="date" v-model="userData.openingDate" readonly disabled/>

        <label>Telefone da Empresa:</label>
        <input type="text" v-model="userData.phone" readonly disabled/>
      </div>

      <label>Senha:</label>
      <input type="password" v-model="userData.password" readonly />

    <div class="wrapper">
      <button type="button" @click="goBack" class="btn">Voltar</button>
      <button type="button" @click="finalizeRegistration" class="outLinedBtn">Finalizar Cadastro</button>
    </div>
  </form>
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
