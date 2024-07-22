import { createApp, h } from 'vue';
import App from './App.vue';
import { provideStore } from './composables/useStore';

const app = createApp({
  setup() {
    provideStore();
  },
  render: () => h(App)
});

app.mount('#app');
