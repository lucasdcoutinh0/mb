import { reactive } from "vue";

export const store = reactive({
  step: 0,
  userData: {
    email: "",
    personType: "",
    fullName: "",
    cpf: "",
    birthdate: "",
    phone: "",
    companyName: "",
    cnpj: "",
    openingDate: "",
    password: "",
  },
  nextStep() {
    this.step++;
  },
  previousStep() {
    this.step--;
  },
  updateField(field, value) {
    this.userData[field] = value;
  },
});
