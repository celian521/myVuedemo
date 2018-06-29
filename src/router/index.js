import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'

Vue.use(Router)

const router = new Router({
  routes: routers,
  mode: 'hash'
})

router.afterEach((to, from) => {
  document.title = to.meta.title || '--'
})

export default router
