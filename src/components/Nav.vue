<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="money" />
      记账
    </router-link>
    |
    <router-link to="/labels">
      <Icon name="label1" />
      标签
    </router-link>
    |
    <router-link to="/statistics">
      <Icon name="statistics" />
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Nav",
});
</script>

<style lang='scss' scoped>
.nav {
  border: 1px solid red;
}
</style>