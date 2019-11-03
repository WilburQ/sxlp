import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BCarousel from '@/components/BCarousel'
import HomePage from '@/components/HomePage.vue'
import Price from '@/components/Price.vue'
import Login from '@/components/Login.vue'
import Kepian from '@/components/Kepian.vue'
import Yang from '@/components/Yang.vue'
import Movie from '@/components/Movie.vue'
import News from '@/components/News.vue'
import Xq from '@/components/Xq.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Xq',component:Xq},
    {path:'/News',component:News},
    {path:'/Movie',component:Movie},
    {path:'/Yang',component:Yang},
    {path:'/Kepian',component:Kepian},
    {path:'/Login',component:Login},
    {path:'/Price',component:Price},
    {path:'/HomePage',component:HomePage},
    {path:'/BCarousel',component:BCarousel},
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
