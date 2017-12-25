<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/good">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rating">评价</router-link>
      </div>
    </div>
    <router-view/>
    <div class="footer"></div>
  </div>
</template>

<script>
  import header from 'components/header/header'

  export default {
    components: {
      'v-header': header
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./common/scss/mixin";
  .tab {
    display: flex;
    width: 100%;
    height: 40px;   
    line-height: 40px;
    @include border-1px(rgba(7, 17, 21, 0.1));
    .tab-item {
      flex: 1;
      display:block;
      text-align: center;
      
      a {
        text-decoration: none;
        font-size: 14px;
        color: rgb(77, 65, 93);
        &.active {
          color: rgb(240, 20, 20);
        }
      }

    }
  }
</style>
