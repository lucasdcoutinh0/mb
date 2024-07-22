import { reactive, provide, inject } from 'vue';

const storeSymbol = Symbol();

export const createStore = () => {
  const state = reactive({
    step: 0,
    userData: {
      email: '',
      personType: '',
      fullName: '',
      cpf: '',
      birthdate: '',
      phone: '',
      companyName: '',
      cnpj: '',
      openingDate: '',
      password: ''
    }
  });

  const updateField = (key, value) => {
    state.userData[key] = value;
  };

  const nextStep = () => {
    if (state.step < 3) state.step++;
  };

  const previousStep = () => {
    if (state.step > 0) state.step--;
  };

  return {
    state,
    updateField,
    nextStep,
    previousStep
  };
};

export const provideStore = () => {
  provide(storeSymbol, createStore());
};

export const useStore = () => {
  const store = inject(storeSymbol);
  if (!store) {
    throw new Error('Store not provided');
  }
  return store;
};
