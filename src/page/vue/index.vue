<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    computed: {},
    watch: {},
    components: {},
    props: [],
    mixins: [],
    methods: {},
    beforeCreate() {
        console.log("beforeCreate 创建前状态===============>");
    },
    created() {
        console.log("created 创建完毕状态===============>");
    },
    beforeMount() {
        console.log("beforeMount 挂载前状态===============>");
    },
    mounted() {
        console.log("mounted 挂载结束状态===============>");
    },
    beforeUpdate() {
        console.log("beforeUpdate 更新前状态===============>");
    },
    updated() {
        console.log("updated 更新完成状态===============>");
    },
    beforeDestroy() {
        console.log("beforeDestroy 销毁前状态===============>");
    },
    destroyed() {
        console.log("destroyed 销毁完成状态===============>");
    },
    activated() {
        console.log("activated keep-alive 组件激活时调用===============>");
    },
    deactivated() {
        console.log("deactivated keep-alive 组件停用时调用。===============>");
    }
};
</script>
