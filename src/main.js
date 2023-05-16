import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueMask from '@devindex/vue-mask';
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import AOS from "aos";
import { Plugin } from "vue-responsive-video-background-player";
import "vue-gifplayer/src/gif.css";
import VScrollLock from "v-scroll-lock";

// Vue.directive('in-viewport', inViewportDirective)

import "aos/dist/aos.css";
import '@mdi/font/css/materialdesignicons.css'
const app = createApp(App);

const vuetify = createVuetify({
	components,
	directives,
});

app.use(VueMask);
app.use(router);
app.use(vuetify);
// app.use(VueGifPlayer);
AOS.init();
app.use(VScrollLock);
app.use(Plugin);
app.mount("#app");
