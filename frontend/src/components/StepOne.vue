<template>
  <h1>Seja bem vindo(a)</h1>
  <form @submit.prevent="submitForm">
    <label for="email">Endereço de e-mail</label>
    <input type="email" id="email" v-model="userData.email" required />

    <div class="wrapper">
      <div class="radioWrapper">
        <input type="radio" name="personType" id="PF" value="PF" @change="updatePersonType" />
        <label for="PF">Pessoa Física</label>
      </div>

      <div class="radioWrapper">
        <input type="radio" name="personType" id="PJ" value="PJ" @change="updatePersonType" />
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

function submitForm() {
  if(!userData.value.personType){
    alert("Selecione Pessoa Física ou Jurídica para continuar")
    return
  }
  store.nextStep()
}

function updatePersonType(event) {
  userData.value.personType = event.target.value;
}
</script>