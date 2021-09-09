import Vue from 'vue';
import Router from 'vue-router';
import EventDetails1 from '../views/EventDetails1.vue'; 
import ShowEvents from '../views/ShowEvents.vue'; 
import MainPage from '../views/MainPage.vue'; 
import EventList1 from '../views/EventList1.vue'; 

Vue.use(Router);

export default new Router({ 
	routes:[
		{
			path:'/'
			,component: MainPage
		},
		{
			path:'/events/list1/details1'
			,component:EventDetails1
		},
		{
			path:'/events'
			,component:ShowEvents
		},
		{
			path:'/events/list1'
			,component:EventList1
		}
	]
})