import { createRouter, createWebHistory } from 'vue-router'
import ListaEventos from '../components/listEvent.vue'
import FormEvento from '../components/newForm.vue'
import DetalhesEvento from '../components/eventDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: ListaEventos},
    {path: '/eventos/novo', component: FormEvento},
    {path: '/eventos/:id', component: DetalhesEvento},
  ],
})

export default router
