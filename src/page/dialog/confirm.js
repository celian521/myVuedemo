// import Vue from 'vue'
import msgComponent from './alert.vue'

let $vm

const plugin = {
  install(Vue, options = {}) {
    const msg = Vue.extend(msgComponent);
    if (!$vm) {
      $vm = new msg({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    $vm.title = options.title || "1"
    $vm.ranking = options.ranking || "2"
    console.log("install")

  }
}
export default plugin
export const install = plugin.install



// export default function (options) {

//   const msg = Vue.extend(msgComponent);

//   let $vm;
//   if (!$vm) {
//     $vm = new msg({
//       el: document.createElement('div')
//     })
//     document.body.appendChild($vm.$el)
//   }

//   // function alert(options) {
//   $vm.title = options.title
//   $vm.ranking = options.ranking
//   // }




//   // setTimeout(() => {
//   //   $vm.title = "88888"
//   // }, 2000);


// }
