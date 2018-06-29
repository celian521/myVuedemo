const home = () =>
  import ('@/page/home');
const hello = () =>
  import ('@/page/test/hello');
  const vue = () =>
  import ('@/page/vue');

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
  },
  {
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
