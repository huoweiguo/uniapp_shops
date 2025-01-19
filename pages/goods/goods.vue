<template>
  <view class="goods_container">
    <uni-section>
      <uni-search-bar placeholder="名称/规格/条形码" bgColor="#efefef" @confirm="search" />
    </uni-section>
    <view>123</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      search (value) {
        console.log(value)
      }
    }
  }
</script>

<style lang="scss" scoped>
.goods_container {
  padding: 30rpx;
  background-color: #f1f1f1;
  height: 100vh;
}
</style>
