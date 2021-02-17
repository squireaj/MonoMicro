import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TheList',
    component: () => import('@/views/TheList.vue'),
  },
  {
    path: '/request',
    name: 'TheRequest',
    component: () => import('@/views/TheRequest.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // store.dispatch('checkIsAuthenticated').then(() => {
  //   if (!store.state.isSignedIn) {
  //     let path = '/'
  //     if (from) {
  //       path = from.path
  //     }
  //     next({
  //       path: '/',
  //       query: { redirect: path },
  //     });
  //   } else {
  //     next();
  //   }
  // });
  next(); // Always call next
});

export default router
