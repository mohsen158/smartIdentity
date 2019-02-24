import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import router from './router'
/* ... */
import {Courses} from  './scripts/smartContract'


Vue.use(SuiVue);
Vue.config.productionTip = false
 Courses.getInstructor(function(error, result){
	if(!error){
 	  console.log('event recieved:',result);
	  }
   else
	 console.error(error);
   });
new Vue({
  router,
   
  render: h => h(App),
}).$mount('#app')
