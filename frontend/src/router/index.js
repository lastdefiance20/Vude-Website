import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import personalData from '../views/personalData.vue'
import information from '../views/information.vue'
import partnership from '../views/partnership.vue';
import EventDetails1 from '../views/EventDetails1.vue'; 
import ShowEvents from '../views/ShowEvents.vue'; 
import MainPage from '../views/MainPage.vue'; 
import EventList1 from '../views/EventList1.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/personalData',
    name: 'personalData',
    component: personalData
  },
  {
    path: '/information',
    name: 'information',
    component: information
  },
  {
    path: '/partnership',
    name: 'partnership',
    component: partnership
  },
  {
    path:'/events/list1/details1',
    name:'EventDetails1',
    component:EventDetails1
  },
  {
    path:'/events/list1',
    name:'EventList1',
    component:EventList1
  },
  {
    path:'/events',
    name:'ShowEvents',
    component:ShowEvents
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
