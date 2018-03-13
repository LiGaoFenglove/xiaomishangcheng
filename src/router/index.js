import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'// 页面组件
import Classify from '@/components/Classify'



Vue.use(Router)

export default new Router({
	mode: "hash",
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //  //  children: [
	   //  // {
	   //  //   path: '',
	   //  //   name: 'Classify',
	   //  //   component: Classify
	   //  // }
    //  //  ]
    // },
    {
      path: '/Classify',
      name: 'Classify',
      component: Classify
    }
    
  ]
});


