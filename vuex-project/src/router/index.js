import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Parent1 from '@/components/vuex1/Parent'
import Parent2 from '@/components/vuex2/Parent'
import Parent3 from '@/components/vuex3/Parent'
import Parent4 from '@/components/vuex4/Parent'
import Parent5 from '@/components/vuex5/Parent'
import Parent6 from '@/components/vuex6/Parent'
import Parent7 from '@/components/vuex7/Parent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/parent1',
      name: 'Parent1',
      component: Parent1
    },
    {
      path: '/parent2',
      name: 'Parent2',
      component: Parent2
    },
    {
      path: '/parent3',
      name: 'Parent3',
      component: Parent3
    },
    {
      path: '/parent4',
      name: 'Parent4',
      component: Parent4
    },
    {
      path: '/parent5',
      name: 'Parent5',
      component: Parent5
    },
    {
      path: '/parent6',
      name: 'Parent6',
      component: Parent6
    },
    {
      path: '/parent7',
      name: 'Parent7',
      component: Parent7
    }
  ]
})
