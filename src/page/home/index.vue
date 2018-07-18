<template>
  <div>
    hello home
    <div v-for="item in list" :key="item.id">{{item.id}}: {{item.name}}</div>
    <!-- <div class="box2"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box2"></div> -->

    <confirm width="500px" title="信息" :visible.sync="confirmVisible" :close-visible="true">
      <h1>谁的青春不迷茫</h1>
      <div class="kiko-footer" slot="footer">
        <a href="javscript:void(0)" class="kiko-btn make-sure" @click="confirmMakeSure">确定</a>
        <a href="javscript:void(0)" class="kiko-btn cancel" @click="confirmVisible = false">取消</a>
      </div>
    </confirm>

    <!--全屏-->
    <p v-loading.fullscreen="loadingFullscreen">
      <button class="btn btn-info" style="position: relative" @click="loadingFullscreen = !loadingFullscreen">loadingFullscreen</button>
    </p>

    <!--指定位置按需渲染-->
    <p>
      <button class="btn btn-info" style="position: relative" @click="loading = !loading">loading</button>
    </p>
    <p v-loading="loading" style="position: relative">
      <pre>
        假如爱情可以解释
        誓言可以修改
        假如
        你我的相遇 可以重新安排
        那么 生活就会比较容易
        假如
        有一天 我终于能将你忘记
        然而 这不是 随便传说的故事
        也不是明天才要 上演的戏剧
        我无法找出原稿
        然后将你 将你一笔抹去
      </pre>
    </p>
    <div style="text-align:center;">
      <span @click='$tooltip($event, { content: "这是一个toolTip", direction: "right", background: "#13CE66", color: "#fff", time: 3000})'>这是一个toolTip</span>
      <br>
      <span @click='$tooltip($event, { content: "这是一个toolTip", direction: "bottom", background: "red", color: "#fff", time: 3000})'>这是一个toolTip</span>
    </div>
  </div>
</template>
<script>
export default {
    name: "",
    data() {
        return {
            list: [],
            msg: "Welcome to Your Vue.js App",
            confirmVisible: false,
            loading: false,
            loadingFullscreen: false
        };
    },
    methods: {
        confirmMakeSure() {
            this.confirmVisible = false;
        }
    },
    mounted() {
        setTimeout(() => {
            this.confirmVisible = true;
        }, 2000);
        this.$message("00这是一个message");
        // this.$message({
        //     message: "这是一个message",
        //     time: 3000
        // });

        //       this.$toast("88888888")
        // console.log(this.$msg);
        // Toast.myGlobalMethod("kkkkkkk")
        //             this.$layer.alert("找不到对象！");
        // this.$layer.confirm("确定要<br/>删除吗？", () => {
        //         this.$layer.msg("执行了删除");
        //         // this.$layer.close(id);
        //       });
        // this.$http
        //     .get("http://jsonplaceholder.typicode.com/posts/1/comments")
        //     .then(ret => {
        //         console.log("axios get=>", ret.data);
        //         this.list = ret.data;
        //     });
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
