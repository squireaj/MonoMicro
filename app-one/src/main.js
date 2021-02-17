import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import printerLogicComponents from 'printer-logic-components'

import App from './App.vue';
import store from './store/store';
import router from './router/router';

Vue.config.productionTip = false;
Vue.use(printerLogicComponents)

const containerSelector = '#appOne-placeholder'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    store,
    render: (h) => h(App),
    el: containerSelector
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

export const devtools = {
  overlays: {
    selectors: [
      containerSelector
    ],
  }
};