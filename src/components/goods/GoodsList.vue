<template>
  <div class="goods-list">
<!-- 方法一：普通路由写法 -->
   <!--  <router-link  :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in goodslist" :key="item.id">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link> -->
<!-- 方法二：用js方式进行路由导航 -->
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageindex: 1, // 新闻列表
      goodslist: []
    };
  },
  created() {
    this.getGoodslist();
  },
  methods: {
    getGoodslist() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            // 如果没有失败，应该把数据保存到 data 上
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getGoodslist();
    },
    goDetail(id){
      //要区分this.$route和this.$router
      //this.$route是路由的“参数对象” 所有路由中的参数（params，query）都属于它 即获取参数
      //this.$router是路由的“导航对象” 它可以使用js代码，实现前进后退 跳转到新的URL地址
      //方法一：(详见vue-router API)
      //this.$router.push("home/goodsinfo"+id) 
      //方法二：传递对象
      //this.$router.push({ path: "/home/goodsinfo/"+id })
      //方法三：传递命名的路由
      this.$router.push({ name: 'goodsinfo', params: { id }})//name是自定义路由名称
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
