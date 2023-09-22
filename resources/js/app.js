import './bootstrap';
import '../css/app.css';
import '../css/master.css';
import { createApp, h } from 'vue';
import router from "./Router";
import ApiService from "@/Core/services/ApiService";

import app from "./Layouts/App.vue";
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    locale: {
        locale: 'fa',
        fallback: 'fa',
        rtl: { fa: true },
    },
})
ApiService.init(app);
const init = createApp(app).use(vuetify).use(router);

init.mount("#app");
