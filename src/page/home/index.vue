<template>
  <div>
    <div v-for="item in list" :key="item.id">{{item.id}}: {{item.name}}</div>
    <div class="box2"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box2"></div>
  </div>
</template>
<script>
export default {
    name: "",
    data() {
        return {
            list: [],
            msg: "Welcome to Your Vue.js App"
        };
    },
    mounted() {
        this.$http
            .get("http://jsonplaceholder.typicode.com/posts/1/comments")
            .then(ret => {
                console.log("axios get=>", ret.data);
                this.list = ret.data;
            });
    }
};
</script>
<style lang="scss" scoped>
.box {
    width: 500px;
    background: #aaaaaa;
    height: 200px;
    float: left;
}
.box2 {
    width: 500px;
    background: gray;
    height: 200px;
    float: left;
}
</style>
