<template>
  <div class="cmt-container">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="写吧 麻溜的(最多写120字)" maxlength="120" v-model="msg"></textarea>

      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
      <div class="cmt-list">
        <div class="cmt-item" v-for="(item , i) in comments" :key="item.add_time"><!-- 因为时间是不变的所以绑定时间 -->
          <div class="cmt-title">
            第{{ i+1 }}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
          </div>
          <div class="cmt-body">
            {{item.content === 'undefined' ? '我没说话' : item.content}}
          </div>
        </div>
      </div>
       <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, // 默认第一页
      comments: [], // 存储评论数据
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            this.comments = this.comments.concat(result.body.message); //concat() 方法用于连接两个或多个数组。 第一页和第二页拼接
          } else {
            Toast("评论获取失败");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast("不能为空!");
      }
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            // 1. 拼接出一个评论对象
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt);
            this.msg = "";
          }
        });
    }
  },

  props: ["id"] //子组件向父组件传值
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    margin: 0;
    height: 85px;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
