import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

Vue.directive('mask', (el, key) => {
	el.innerText = key.value;
});
