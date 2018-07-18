
import msgComponent from '@/page/dialog/alert.vue'
var Toast = {};
// Toast.install = function (Vue, options) {
//     Vue.prototype.$msg = 'Hello World';
// }

Toast.install = function (Vue, options) {
  console.log(options.a)

  Vue.myGlobalMethod = function (a) {  // 1. 添加全局方法或属性，如: vue-custom-element
    // 逻辑...
    console.log("全局方法",a)
  }

  Vue.prototype.$msg = 'Hello World';
  Vue.prototype.$toast = (tips) => {
      // let toastTpl = Vue.extend({     // 1、创建构造器，定义好提示信息的模板
      //     template: '<div class="vue-toast">' + tips + '</div>'
      // });
      let toastTpl = Vue.extend(msgComponent);
      let tpl = new toastTpl().$mount().$el;  // 2、创建实例，挂载到文档以后的地方
      document.body.appendChild(tpl);     // 3、把创建的实例添加到body中
      setTimeout(function () {        // 4、延迟2.5秒后移除该提示
          document.body.removeChild(tpl);
      }, 2500)
  }
}

export default Toast;
