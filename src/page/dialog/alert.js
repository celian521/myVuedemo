import Vue from 'vue'
import msgComponent from './alert.vue'

export default function (options) {

  const msg = Vue.extend(msgComponent);

  let $vm;
  if (!$vm) {
    $vm = new msg({
      el: document.createElement('div')
    })
    document.body.appendChild($vm.$el)
  }

  // function alert(options) {
    $vm.title = options.title
    $vm.ranking = options.ranking
  // }




  // setTimeout(() => {
  //   $vm.title = "88888"
  // }, 2000);


}
