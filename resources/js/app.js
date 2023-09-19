import './bootstrap';
import '../css/app.css';
import '../css/master.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';

import app from "./Layouts/App.vue";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    locale: {
        locale: 'fa',
        rtl: true,
    }
})

const init = createApp(app).use(vuetify);

init.mount("#app");
