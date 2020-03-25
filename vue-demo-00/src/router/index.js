import Vue from 'vue'
import VueRouter from 'vue-router'

import Jigsawpuzzle from "../components/views-qxj/Jigsawpuzzle";

Vue.use(VueRouter);

export default new VueRouter({
  mode:'hash',
  routes:[
    {
      path: '/',
      name:'index',
      redirect:'/jigsawpuzzle'
    },
    {
      path:'/jigsawpuzzle',
      component:Jigsawpuzzle
    }
  ]
})
