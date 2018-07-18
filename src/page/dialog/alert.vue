<template>
  <div class="a">
    {{title}} <br>
    {{ranking}}
  </div>
</template>

<script>
import Vue from "vue";
export default {
    props: {
        title: {
            default: "00"
        },
        ranking: {
          default:"00"
        }
    }
};
// Vue.component("child", {
//     // render: function(createElement) {
//     //     return createElement(
//     //         "h" + this.level, // tag name 标签名称
//     //         this.$slots.default // 子组件中的阵列
//     //     );
//     // },
//     // props: {
//     //     level: {
//     //         type: Number,
//     //         required: true
//     //     }
//     // }
// });

// new Vue({
//     el: "#app"
// })
</script>
