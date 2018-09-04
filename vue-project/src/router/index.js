// vue-router는 기존에 서버에서만 사용하던 라우터를 프론트엔드에서도 사용할 수 있도록 도와준다.

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'
import AxiosTest from '@/components/AxiosTest'

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(Router)

// 라우터 객체를 생성한다.
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/axios',
      name: 'AxiosTest',
      component: AxiosTest
    }
  ],
  /**
   * Vue 라우터는 기본적으로 RootUrl/#/Router name의 구조로 되어있다.
   * 여기서 # 태그 값을 제외하고 기본 URL 방식을 사용하려면 아래와 같이 history 모드를 추가한다.
   */
  mode: 'history'
})