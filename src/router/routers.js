const home = () =>
  import ('@/page/home');
const hello = () =>
  import ('@/page/test/hello');
const vue = () =>
  import ('@/page/vue');
const list = () =>
  import ('@/page/list');
const dialog = () =>
  import ('@/page/dialog');

const routers = [{
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: home
  }, {
    name: 'hello',
    path: '/hello',
    meta: {
      title: 'HelloWorld'
    },
    component: hello
  }, {
    name: 'list',
    path: '/list',
    meta: {
      title: 'list'
    },
    component: list
  }, {
    name: 'dialog',
    path: '/dialog',
    meta: {
      title: 'dialog'
    },
    component: dialog
  }, {
    name: 'vue',
    path: '/vue',
    meta: {
      title: 'vue生命周期'
    },
    component: vue
  },
  // 404
  {
    path: '*',
    redirect: '/'
  }
]

export default routers
