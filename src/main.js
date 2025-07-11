// Vuetify styles (requerido)
import "vuetify/styles";

import App from "./App.vue";
import { createApp } from "vue";
// import createVuetify sin componentes ni directivas explícitas
import { createVuetify } from "vuetify";

const vuetify = createVuetify();

createApp(App).use(vuetify).mount("#app");
