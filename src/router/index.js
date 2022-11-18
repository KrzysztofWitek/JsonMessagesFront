import { createRouter, createWebHistory } from 'vue-router'

import MyMessagesView from '../views/MyMessagesView.vue'
import MessagesView from '../views/MessagesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'myMessages',
      component: MyMessagesView
    },
    {
      path: '/wiadomosci',
      name: 'messages',
      component: MessagesView
    }
  ]
})

export default router
