<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money" />
      记账
    </router-link>
    <router-link to="/labels" class="item">
      <Icon name="label1" />
      标签
    </router-link>
    <router-link to="/statistics" class="item">
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
nav {
  display: flex;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.3);

  > .item {
    padding: 2px 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    .icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>