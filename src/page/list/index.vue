<template>
  <div>
    <!-- minirefresh开头的class请勿修改 -->
    <div id="minirefresh" class="minirefresh-wrap">
      <div class="minirefresh-scroll">
        <ul class="data-list" id="listdata">
          <li v-for="(item,index) in listData" :key="index" class="list-item">
            <h3 class="msg-title">
              {{index}} : {{item.title}}
            </h3>
            <span class="msg-fs14 msg-date">
              {{item.date}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// https://github.com/minirefresh/minirefresh
import "minirefresh/dist/debug/minirefresh.css";
import MiniRefreshTools from "minirefresh";
export default {
    name: "list",
    data() {
        return {
            miniRefresh: null,
            listData: []
        };
    },
    mounted() {
        // 引入任何一个主题后，都会有一个 MiniRefresh 全局变量
        this.miniRefresh = new MiniRefresh({
            container: "#minirefresh",
            // isUseBodyScroll: true,
            isScrollBar: false,
            down: {
                callback: () => {
                    // 下拉事件
                    console.log("down");
                    this.listData = [];
                    this.miniRefresh.endDownLoading(); // 结束下拉刷新
                }
            },
            up: {
                callback: () => {
                    // 上拉事件
                    for (var i = 0; i < 5; i++) {
                        this.listData.push({ title: "55", date: "00" });
                        console.log(this.listData.length);
                    }
                    if (this.listData.length > 60) {
                        this.miniRefresh.endUpLoading(true,"成功加载了N条数据");
                    } else {
                        this.miniRefresh.endUpLoading(false);
                    }
                }
            }
        });
    }
};
</script>

