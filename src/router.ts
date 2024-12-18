import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CryptoJS from 'crypto-js';

import Timeline from './views/Timeline.vue'
import NotFound from './views/NotFound.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Timeline,
    beforeEnter: (to, from, next) => {
      const pass = prompt('Digite a senha para acessar a página:');
      
      const password_hash = 'b8c3ca1b96fb957d300242cf363a5b70';
      
      const password_inputed = CryptoJS.MD5(pass).toString(CryptoJS.enc.Hex);
      
      // Verifica se o hash gerado é igual ao hash da senha armazenada
      if (password_inputed === password_hash) {
        next()
      } else {
        alert('Senha incorreta!')
        next(false)
      }
    },
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { layout: 'empty' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
