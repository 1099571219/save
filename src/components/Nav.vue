<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label" />
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Nav",
});
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
nav {
  position:fixed;
  bottom:0;
  width:100%;
  display: flex;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 10px;

  // @extend %outerShadow;
  > .item {
    padding: 2px 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: #aeb5c1;

    .icon {
      width: 30px;
      height: 30px;
    }
  }
  > .item.selected {
    color: #55bc7e;
  }
}
</style>