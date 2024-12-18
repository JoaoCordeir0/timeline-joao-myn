import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue';
import router from './router';
import './assets/main.css';

import EmptyLayout from './components/EmptyLayout.vue';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

app.component('empty-layout', EmptyLayout);

app.component('font-awesome-icon', FontAwesomeIcon)

/* Sweetalert2 */
app.use(VueSweetalert2);

/* app routes */
app.use(router);

/* add icons to the library */
library.add() 

app.mount('#app');
