import { createRouter, createWebHistory } from 'vue-router'
import ListaEventos from '../components/listEvent.vue'
import FormEvento from '../components/newForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: ListaEventos },
    //rota pronta para RF3
    { path: '/eventos/novo', component: FormEvento },
  ],
})

export default router
