<template>
    <div>
      <h1>Revisão Final dos Dados</h1>
      <form>
        <fieldset disabled>
          <label>Email:</label>
          <input type="email" v-model="userData.email" readonly>
  
          <label>Tipo de Cadastro:</label>
          <input type="text" v-model="userData.personType" readonly>
  
          <!-- Condicionalmente renderizar campos baseados no tipo de pessoa -->
          <div v-if="userData.personType === 'PF'">
            <label>Nome Completo:</label>
            <input type="text" v-model="userData.fullName" readonly>
  
            <label>CPF:</label>
            <input type="text" v-model="userData.cpf" readonly>
  
            <label>Data de Nascimento:</label>
            <input type="date" v-model="userData.birthdate" readonly>
  
            <label>Número de Telefone:</label>
            <input type="text" v-model="userData.phone" readonly>
          </div>
          <div v-if="userData.personType === 'PJ'">
            <label>Razão Social:</label>
            <input type="text" v-model="userData.companyName" readonly>
  
            <label>CNPJ:</label>
            <input type="text" v-model="userData.cnpj" readonly>
  
            <label>Data de Abertura:</label>
            <input type="date" v-model="userData.openingDate" readonly>
  
            <label>Telefone da Empresa:</label>
            <input type="text" v-model="userData.phone" readonly>
          </div>
          
          <label>Senha:</label>
          <input type="password" v-model="userData.password" readonly>
        </fieldset>
  
        <button type="button" @click="goBack">Editar Dados</button>
        <button type="button" @click="finalizeRegistration">Finalizar Cadastro</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { store } from '../composables/store';
  
  const userData = ref(store.userData);
  
  function goBack() {
    // Permitir ao usuário voltar para o último passo editável
    store.previousStep();
  }
  
  function finalizeRegistration() {
    // Implementar lógica para finalizar o cadastro, como enviar para um servidor
    alert('Cadastro finalizado com sucesso!');
    // Aqui você pode redirecionar o usuário para outra página ou fazer outras ações pós-cadastro
  }
  </script>
  